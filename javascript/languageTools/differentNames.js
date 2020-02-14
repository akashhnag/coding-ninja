let str='Abhishek harshit Ayush harshit Ayush Iti Deepak Ayush Iti Iti';
let arr=str.trim().split(" ");
let checked='';
let c=1;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            c++;

        }
    }
    if(c>1){
        if(arr[i]!=checked){
            console.log(arr[i],c);
            checked=arr[i]

        }
        c=1;

    }
}
