n = int(input())
arr = list(int(i) for i in input().strip().split(' '))
ind=0
evensum=0
oddsum=0
for a in arr:
    if a%2==0 and ind%2==0:
        evensum+=a
    elif a%2==1 and ind%2==1:
        oddsum+=a
    ind+=1
print(evensum,' ',oddsum)
