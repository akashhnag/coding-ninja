def printNumbers(x):

    global c

    print(c,end=' ')
    c+=1
    if(c<=x):
        printNumbers(x)



# Main
from sys import setrecursionlimit
setrecursionlimit(11000)
x=int(input())
c=1
printNumbers(x)
