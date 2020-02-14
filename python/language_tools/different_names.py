str='Abhishek harshit Ayush harshit Ayush Iti Deepak Ayush Iti Iti'
process_string=str+' '
word=''
li = list(str.split(" "))
c=0
checked=''
def check(word):
    global c,checked
    for a in li:
        if(a==word):
            c+=1
        if(c>1):
            if(word!=checked):
                print(word,c)
                checked=word
        c=0

for s in str:
    if(s!=' '):
        word+=s
    else:
        check(word)
        word=''
