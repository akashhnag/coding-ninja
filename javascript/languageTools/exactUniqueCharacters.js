let str='ababacd';
let c=0;let done='';
for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        if(str[j]==str[i]){
            c++;
        }
    }
    if(c>0){
        if(str[i]!=done){
            console.log(str[i]);
            done=str[i]
        }
    }
    c=0;

}
