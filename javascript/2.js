let arr=[[1,2,3],[4,5,6],[7,8,9]]
let leftDiagonal=0;let rightDiagonal=0;let border=0;
let n=0;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(i===j){
            leftDiagonal+=arr[i][j];
        }
        if(j===(arr.length-1)-n){
            rightDiagonal+=arr[i][j];
            n++;
        }
        if(i===0 || i===arr.length-1){
            border+=arr[i][j];
        }
        if(j==0 || j===arr.length-1){
            border+=arr[i][j];
        }
    }
}
console.log(leftDiagonal,rightDiagonal,border);
