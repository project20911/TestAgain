import logging
import pysrt
import sys
import asyncio
from jisho_api.tokenize import Tokens
from jisho_api.word import Word
from openpyxl import Workbook
from openpyxl import load_workbook
import requests
from requests.utils import quote

logging.basicConfig(filename='info.log', encoding='utf-8',
                    level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logging.getLogger().addHandler(logging.StreamHandler())
nameFile = sys.argv[1]
nameExcel = nameFile.replace(".srt", ".xlsx")
sub_a = pysrt.open(nameFile)
arr = []
current_dich = 0
max = 20
arr = [sub_a[i*max:(i+1)*max] for i in range(len(sub_a)//max)]
last = sub_a[len(arr)*max:len(sub_a)]
arr.append(last)
max_line = len(sub_a)
logging.info(f'=======================')
logging.info(f'File {nameFile} có {max_line} câu thoại')
logging.info(f'=======================')

async def phan_tich_cau(index=0):
    logging.info('Chạy phân tích câu')
    is_infinity = True
    count = index * max + 1
    while is_infinity:
        for x in range(index, len(arr)):
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
                logging.info('【Phân tích】Hàng: ' + str(x) +
                             ' || ' + str(count - 1) + '/' + str(max_line))
                if (count % 10 == 0):
                    logging.info('【Phân tích】Save !!')
                    wb.save(filename=nameFile.replace(".srt", ".xlsx"))
        wb.save(filename=nameFile.replace(".srt", ".xlsx"))
        if (count >= max_line):
            logging.info('Xong phân tích câu')
            is_infinity = False


async def dich_jisho(index=2):
    logging.info('Chạy từ_điển_1')
    count_0 = 0
    for row in ws.iter_rows(min_row=index):
        count_0 += 1
        logging.info('【từ_điển_1】Hàng: ', str(row[0].row))
        if (row[3].value is not None):
            result = Word.request(row[3].value)
            if (result is not None):
                row[5].value = str(result.data[0].japanese[0].word)
        if (count_0 % 20 == 0):
            wb.save(filename=nameFile.replace(".srt", ".xlsx"))
    wb.save(filename=nameExcel)
    logging.info('Xong từ_điển_1')


async def dich_tu(index=2):
    logging.info('Chạy mazii')
    count_1 = 0
    for row in ws.iter_rows(min_row=index):
        count_1 += 1
        if ((row[5].value is not None) and (row[5].value != 'None')):
            logging.info('【mazii】Hàng: ' +
                         str(row[0].row) + ' ' + str(row[5].value))
            response = requests.get(
                'https://mazii.net/api/search/' + quote(row[5].value) + '/10/1')
            json_res = response.json()
            if (json_res.get('found')):
                row[6].value = json_res.get('data')[0].get('means')[
                    0].get('mean')
        elif (row[3].value is not None):
            logging.info('【mazii】Hàng: ' +
                         str(row[0].row) + ' ' + str(row[3].value))
            response = requests.get(
                'https://mazii.net/api/search/' + quote(row[3].value) + '/10/1')
            json_res = response.json()
            if (json_res.get('found')):
                row[6].value = json_res.get('data')[0].get('means')[
                    0].get('mean')

        if (count_1 % 20 == 0):
            wb.save(filename=nameFile.replace(".srt", ".xlsx"))

    wb.save(filename=nameFile.replace(".srt", ".xlsx"))
    logging.info('Xong mazii')


async def main():
    global wb, ws
    choice = input(
        "\n1. Ấn 1 để chạy từ đầu\n2. Ấn 2 để chạy lại từ 「từ_điển_1」\n3. Ấn 3 để chạy lại từ 「mazii」\n4. Ấn 4 để chạy lại từ đầu với số hàng\n")
    try:
        choice = int(choice)
        if choice == 1:
            wb = Workbook()
            ws = wb.active
            ws.title = "Từ vựng"
            rowTitle = ('STT', 'Thời gian', 'Subtitle',
                        'Từ vựng', 'Loại từ', 'Từ điền', 'Nghĩa')
            ws.append(rowTitle)
            await phan_tich_cau()
            await dich_jisho()
            await dich_tu()
            wb.save(filename=nameExcel)
        elif choice == 2:
            index = input("\nNhập số hàng:\n")
            try:
                index = int(index)
                wb = load_workbook(filename=nameExcel)
                ws = wb["Từ vựng"]
                await dich_jisho(index)
                await dich_tu()
            except:
                logging.info('LỖI - 2')
                quit()
        elif choice == 3:
            try:
                index = input("\nNhập số hàng:\n")
                index = int(index)
                wb = load_workbook(filename=nameExcel)
                ws = wb["Từ vựng"]
                await dich_tu(index)
            except:
                logging.info('LỖI - 3')
        elif choice == 4:
            try:
                index = input("\nNhập số hàng:\n")
                index = int(index)
                wb = load_workbook(filename=nameExcel)
                ws = wb["Từ vựng"]
                if index < len(arr):
                    await phan_tich_cau(index)
                    await dich_jisho()
                    await dich_tu()
                else:
                    logging.info('LỖI QUÁ SỐ HÀNG!!!')
            except:
                logging.info('LỖI - 5')
        else:
            logging.info('LỖI - 1')
    except:
        logging.info('LỖI - 4')

asyncio.run(main())
