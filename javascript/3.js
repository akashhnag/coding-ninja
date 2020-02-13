
let arr=[9, 1, 2, 3, 4, 5,  16, 17, 19];
let sum=0;let set=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]<=10){
        sum+=arr[i];
        let a=[];
        for(let j=i+1;j<arr.length;j++){
            if(j<=10){
                sum+=arr[j]
                if(sum===10){
                    if(a.length>0){
                        set.push(arr[i]);
                        set.push(a);
                        set.push(arr[j]);
                        console.log(set);
                    }
                    else{
                        set.push(arr[i]);
                        set.push(arr[j]);
                        console.log(set);
                    }
                    break
                }
                else if(sum<10){
                    a.push(arr[j]);
                }

            }
        }
        sum=0;
        set=[];
        }

}
