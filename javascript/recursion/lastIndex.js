//get last index of an element using recursion
let arr=[9 ,8 ,10 ,8];
let x=8;
let c=arr.length;
findLast(arr,x);

function findLast(arr,x){
    c--;
   if(arr.length>0){
        if(arr[arr.length-1]===x){
            console.log(c);
            return
        }
       arr.pop();

       findLast(arr,x);
   }else{
       console.log(-1);
   }

}
