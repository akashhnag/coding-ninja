# get number of digits of a number using recursion
def countDigits(x):
    global c

    if(x/10>0):
        c+=1
        countDigits(int(x/10))

x=int(input())
c=0
countDigits(x)
print(c)
