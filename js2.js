// for (i=0; i<100; i++) {
//     console.log('Its time to say bye bye');

// }
// let friend = ['arif','remal','islam','borkot']
// let laptop ={
//     name: 'walton',
//     ram:90,
//     spec : ['1gb','blutooth','wifi','air'],
//     camera: 60,

    
// }

// for( i=0; i<laptop.spec.length; i++){
//     let element = laptop.spec[2];
//     return element
//     // console.log(element);
// }

// function sum (num1,num2) {
//     var result = num1 + num2;
//     return result
    
// }
// const tottallsum = sum (1,2)
// console.log(tottallsum);

// function bye(num){
//     for (i=0; i<10;i++){
//         console.log('bye',num);
//     }
// }
// bye('ok')
// function kmtomile (km){
//     let result =km* 0.62
//     return result
// }
// let miles = kmtomile(12);
// console.log(miles);

function workout (values){
    let vicepwok = ['cable crodd','bicep','bujina']
    let cestworkout = ['ceestfly','chest press']
    if  (values=== 'bicep'){
        return vicepwok
    } else if (values=== 'chest press') {
        return cestworkout;

    } else{
        return 'wrong keyord'
    }

}

let workoutPlan = workout('biceps')
console.log(workoutPlan);