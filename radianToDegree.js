function radianToDegree(radian){
    if (radian != Number){
        return 'input a valid number'
    }
const PI = 3.1416;
const degree = radian* 180/ PI
let finall = degree.toFixed(2)
    // return degree
    return finall

}

let result= radianToDegree ('10')
console.log( result);