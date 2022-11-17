let arr=[2,3,4,6,8]
let arr2=arr.map((curElm)=>curElm*2).filter((curElm)=>curElm>10).reduce((accumulator,curElm)=>{
    return accumulator+=curElm
})
console.log(arr2)