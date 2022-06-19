import shutil
import os

source = "/Volumes/Untitled/untitled folder/"

files = os.listdir(source)

for file in files:
    path = source + file
    print(path)
    if os.path.isdir(path):  
        files2 = os.listdir(path)
        for file in files2:
            path2 = path + '/' + file
            if os.path.isfile(path2):
                shutil.move(path2, source + file)
    elif os.path.isfile(path):
        print(" ")
        # print("It is a normal file")
    else:
        print(" ")
  

