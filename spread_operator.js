// function sum(a,b,c){
//     console.log(a+b+c)
// }
// var arr=[1,2,3,4];
// console.log(...arr)
// sum(...arr)
// sum.apply(null,arr)

function sum(...number){
    return number.reduce((accumulator,cuurentvalue)=>{
         return accumulator+=cuurentvalue
    })
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4,5))