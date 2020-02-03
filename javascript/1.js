let arr=[2,3,5,1,4];
let evenSum=0;
let oddSum=0;
arr.forEach((ele,ind)=>{
    if((ele%2)===0 && (ind%2===0)){
        evenSum+=ele;
    }
    else if((ele%2)!=0 && (ind%2!=0)){
        oddSum+=ele
    }
})
console.log(evenSum);
console.log(oddSum);
