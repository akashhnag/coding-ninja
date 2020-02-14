characters=int(input())
string=input()
a=0
s=0
p=0
for k in string:
    if(k=='a'):
        a+=1
    elif(k=='s'):
        s+=1
    elif(k=='p'):
        p+=1

print(a,s,p)
