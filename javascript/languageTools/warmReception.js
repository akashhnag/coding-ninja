let arr1=[900, 1000, 1100 ,1030, 1600];
let arr2=[1900 ,1300, 1130 ,1130 ,1800];
let maxTime=0;let index=0;let seats=0;

let getMaxTime=new Promise((resolve,reject)=>{
    for(let i=0;i<arr1.length;i++){
        let diff=0;
        diff=arr2[i]-arr1[i];
        if(diff>maxTime){
            maxTime=diff;
            index=i;
        }
        if(i===arr1.length-1){
            resolve();
        }
    }
})


getMaxTime.then(()=>{
    for(let i=0;i<arr1.length;i++){
        if(i!=index){
            if(arr1[i]>arr1[index] && arr2[i]<arr2[index]){
                seats++;
            }
        }

    }
    console.log(seats);
})
