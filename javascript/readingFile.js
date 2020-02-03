var fs = require('fs');
let arr=[];
let sum=0;
fs.readFile('DATA.txt', function(err, contents) {
    if(err){
        console.log('err occured while reading file',err);

    }
    else{
        console.log(contents);
        let file=contents+' ';
        let str='';
        for(let i=0;i<file.length;i++){
            if(file.charAt(i)!=' '){
                str+=file.charAt(i);
            }else{
                arr.push(parseInt(str));
                str='';
            }
        }
        console.log(arr);
        arr.forEach((ele)=>{
            sum+=ele;
        })


        fs.writeFile('result.txt',sum,(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(sum);
            }
        })
    }
})
