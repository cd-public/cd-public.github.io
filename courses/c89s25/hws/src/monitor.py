import sys, os, time

fname = input("file name (without ending)?\n>>> ")

last = os.stat(fname + ".qmd").st_mtime

print("Monitoring " + fname + ".qmd...")

while True:
    time.sleep(1)
    curr = os.stat(fname + ".qmd").st_mtime
    if curr != last:
        os.system("quarto render " + fname + ".qmd")
        last = curr
        print(last)