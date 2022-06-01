from pickle import TRUE
import pysrt
import asyncio
from jisho_api.tokenize import Tokens
from jisho_api.word import Word
from openpyxl import Workbook
from openpyxl import load_workbook
import requests
from requests.utils import quote
import json


nameFile = '1JP.srt'
sub_a = pysrt.open(nameFile)
wb = Workbook()
ws = wb.active
ws.title = "Từ vựng"
arr = []
current_dich = 0
max = 20
arr = [sub_a[i*max:(i+1)*max] for i in range(len(sub_a)//max)]
last = sub_a[len(arr)*max:len(sub_a)]
arr.append(last)

max_line = len(sub_a)
print(max_line)
async def tach_tu():
    is_infinity = True
    count = 1
    while is_infinity:
        for x in range(len(arr)):
            for y in arr[x]:
                text = y.text.replace(u'\u3000', u' ').replace('\n', ' ')
                currentRow = (count, str(y.start), text)
                ws.append(currentRow)
                result = Tokens.request(text)
                if (result is not None):
                    for res in result.data:
                        if (str(res.pos_tag) == 'PosTag.noun'):
                            ws.append(('', '', '', str(res.token), 'Danh từ'))
                        elif (str(res.pos_tag) == 'PosTag.verb'):
                            ws.append(('', '', '', str(res.token), 'Động từ'))
                count += 1
                print(str(count-1) + '/' + str(max_line))
        wb.save(filename=nameFile.replace(".srt", ".xlsx"))
        print('......')
        if (count >= max_line):
            is_infinity = False
                            

asyncio.run(tach_tu())
            
async def dich_tu():
    for row in ws.iter_rows(min_row=2):
        if (row[5].value is not None):
            response = requests.get('https://mazii.net/api/search/'+ quote(row[5].value) + '/10/1')
            json_res = response.json()
            if (json_res.get('found')):
                row[6].value = json_res.get('data')[0].get('means')[0].get('mean')
        elif (row[3].value is not None):
            response = requests.get('https://mazii.net/api/search/'+ quote(row[3].value) + '/10/1')
            json_res = response.json()
            if (json_res.get('found')):
                row[6].value = json_res.get('data')[0].get('means')[0].get('mean')             
    wb.save(filename=nameFile.replace(".srt", ".xlsx"))

async def dich_jisho():
    for row in ws.iter_rows(min_row=2):
        if (row[3].value is not None):
            result = Word.request(row[3].value)
            if (result is not None):
                row[5].value = str(result.data[0].japanese[0].word)
    wb.save(filename=nameFile.replace(".srt", ".xlsx"))
        
async def main():
    rowTitle = ('STT', 'Thời gian', 'Subtitle', 'Từ vựng', 'Loại từ', 'Từ điền', 'Nghĩa')
    ws.append(rowTitle)
    await tach_tu()
    await dich_jisho()
    await dich_tu()
    wb.save(filename=nameFile.replace(".srt", ".xlsx"))

asyncio.run(main())
# asyncio.run(tach_tu())
# asyncio.run(dich_jisho())
# asyncio.run(dich_tu())