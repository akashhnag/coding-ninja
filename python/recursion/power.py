def power(x, n):
    if(n!=0):
        return(x*power(x,n-1))
    else:
        return 1


# Main
from sys import setrecursionlimit
setrecursionlimit(11000)
x, n=list(int(i) for i in input().strip().split(' '))

print(power(x, n))
