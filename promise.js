// let pro=new Promise((function(resolve,reject){
//     var error=true
//     if(error){
//         resolve("you can print table")
//     }
//     else{
//         reject("error")
//     }
// }))
// pro.then(resolve=>{
//     const num=require("readline-sync")
//     let table=num.question("enter the num:-")
//     let table_2=num.question("enter the num_2:-")
//     while(table<=table_2){
//         for(var i=1;i<=10;i++){
//             console.log(table,"*",i,"=",table*i)
//         }
//         table++
//     }
// })
// pro.catch(error=>{
//     console.log(reject)
// })


function prom(a,b){
    return new Promise((resolve,reject)=>{
        console.log("fetching data")
        var c=a+b;
        setTimeout(()=>{
            if(a,b){
                resolve(`correct your answer ${c}`)
            }else{
                reject("incorrect")
            }
        })
    })
}
prom(5,6).then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(ezrror)
})
