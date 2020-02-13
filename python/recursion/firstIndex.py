#get 1st index of an element in a list
def firstIndex(arr,x):
    global c
    c+=1
    if(len(arr)>0):
        if(arr[0]==x):
            print(c)
            return
        arr.pop(0)
        firstIndex(arr,x)
    else:
        print(-1)


# Main
from sys import setrecursionlimit
setrecursionlimit(11000)
n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
x=int(input())
c=-1
firstIndex(arr,x)
