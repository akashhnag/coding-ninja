//check whether particular element is present in an array
let a=[6,4,3,0,8];
let x=6;
let b=find(a,x)
console.log(b);

function find(a,x){
    if(a.length>0){
        if(a[a.length-1]===x){
            console.log('here');

            return true;
        }
        a.pop();
        return find(a,x)
    }else{


        return false;
    }



}
