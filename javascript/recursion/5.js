//get every index of an element in an array using recursion
let arr=[9 ,8 ,10 ,8 ,8];
let x=1;let c=-1;let resArr=[];

console.log(getIndex(arr,x));

function getIndex(arr,x){
    c++;
    if(arr.length>0){
        if(arr[0]===x){
           resArr.push(c);
        }
        arr.shift();
        return getIndex(arr,x);
    }
    else{
        if(resArr.length>0){
            return(resArr);
        }
        else{
            return 'not present';
        }

    }
}
