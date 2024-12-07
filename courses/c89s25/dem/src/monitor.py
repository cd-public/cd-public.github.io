import sys, os, time

fname = sys.argv[1]

last = os.stat(fname).st_mtime

while True:
    time.sleep(1)
    curr = os.stat(fname).st_mtime
    if curr != last:
        os.system("quarto render cipher.qmd")
        last = curr