startH, startM = input().split()
startH = int(startH)
startM = int(startM)
nT = int(input())

nH = int(nT/60)
nM = int(nT%60)

startM = startM + nM
if(startM>=60):
    startM = startM-60
    startH = startH + 1

startH = startH + nH
if(startH>=24):
    startH = startH-24
print(startH, startM)