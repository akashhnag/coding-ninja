//get 1st index of an element using recursion
let arr=[9 ,8 ,10 ,8];
let x=4;
let c=-1;
console.log(findFirst(arr,x));

function findFirst(arr,x){
    c++;
   if(arr.length>0){
       if(arr[0]===x){
            console.log(c);

           return true;
       }
       arr.shift();
       return findFirst(arr,x);
   }else{
       console.log(-1);

       return false;
   }

}
