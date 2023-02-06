// let num = [-1,2,3,-3,4,5,6,-7,-8,-9]
// let count = 0;


// for (i=0; i<num.length; i++){
//     const element = num [i];
    
//     if (element>5 ){
//         count = count + 1;
//     } else{
        
//     }
// }
// console.log(count);

function getter(num){
    let count = 0;
    for(i=0; i<num.length; i++){
        const element = num[i];
        if(element > 5){
            count++
        }
    }
    return count
}
let result = getter ([-1,2,3,-3,4,5,6,-7,8,9])
console.log(result);