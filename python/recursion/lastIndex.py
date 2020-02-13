#get last index of an element in a list
def lastIndex(arr,x):
    global c
    c-=1
    if(len(arr)>0):
        if(arr[len(arr)-1]==x):
            print(c)
            return
        arr.pop(len(arr)-1)
        lastIndex(arr,x)
    else:
        print(-1)


# Main
from sys import setrecursionlimit
setrecursionlimit(11000)
n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
x=int(input())
c=len(arr)

lastIndex(arr,x)
