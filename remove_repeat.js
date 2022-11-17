// var num = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// i=0
// k=[]
// while(i<num.length){
//     n=num[i]
//     if(!k.includes(n)){
//         k.push(n)
//         y=k
//         y.sort()
//     }i++
// }console.log(k)

// var a=[]
// for (i of num){
//     if(!a.includes(i)){
//         a.push(i)
//     }
// }
// console.log(a)


// uniques=[]
// duplicates=[]
// for(var i of num){
//     if(!uniques.includes(i)){
//         uniques.push(i)
//     }
// }for(var j of uniques){
//     count=0
//     for(var k of num){
//         if (j === k){
//             count+=1
//         }
//     }if(count >1){
//         duplicates.push(j);
//     }
// }
// console.log(duplicates);

var arr=[10,20,30,15,20,10]
b=[]
for(var i=0;i<=arr.length;i++){
    if(!b.includes(arr[i])){
        b.push(arr[i])
    }
}
console.log(b)