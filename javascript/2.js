let arr=[[1,2,3],[4,5,6],[7,8,9]]
let leftDiagonal=0;let rightDiagonal=0;let border=0;
let n=3;
let tmp=n;
arr.forEach((ele1,ind1)=>{
    ele1.forEach((ele2,ind2)=>{
        if(ind1===ind2){
            leftDiagonal+=ele2
        }
        if(ind2===tmp-1){
            rightDiagonal+=ele2;
            tmp--;
        }
        if(ind1===0|| ind1===n-1){
            border+=ind2;
        }

    })
})
console.log(leftDiagonal);
console.log(rightDiagonal);
