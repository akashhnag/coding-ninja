def sumArray(arr):
   global sum
   if(len(arr)>0):
      sum+=arr[0]
      arr.pop(0)
      return sumArray(arr)
   else:
      return sum


# Main
from sys import setrecursionlimit
setrecursionlimit(11000)
n=int(input())
arr=list(int(i) for i in input().strip().split(' '))
sum=0
print(sumArray(arr))
