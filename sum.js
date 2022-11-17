// marks = [[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]
// var i=0
// sum=0
// while (i<marks.length){
//     k=0
//     while(k<marks[i].length){
//         sum=sum+marks[i][k]
//         k++
//     }
//     i++
// }
// console.log(sum)

// var sum=0;
// for(var i of marks){
// for(var j of i){
// sum+=j
// }
// }
// console.log(sum);

arr=[12,34,56,789,0987,345]
a=[]
for(i of arr){
    sum=0
    for(j of String(i)){
        sum=sum+Number(j)
    }
    a.push(sum)
}
console.log(a)