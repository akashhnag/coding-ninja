let arr=[['Mohit', 94 ,85, 97],['Shubham' ,93 ,91 ,94],['Rishabh', 95, 81 ,99]]
let sum=0;let max=0;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;i++){
        if(j!=0){
            sum+=arr[j];
        }
    }
    if(sum>max){
        max=sum;
    }
}
