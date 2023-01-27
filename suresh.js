function suresh(list_a,num){
    let result=[]
    
    if(num===2){
        result.push(list_a)
    }
    if(num>2){
        let result1=[];
        for(let i=0; i=2 ;i++){
            result1.push(i)
        }
        result.push(result1)
        list_a.remove(list_a[0])
        list_a.remove(list_a[1])
        num=num-2;
    }
    return result 
}

let list_a=[2,3,4,5,6,7,8]
let num=list_a.length;

console.log(suresh(list_a,num))