// var array=[-2,3,4,-5,23,5,-7,-8,19,22,-9]
var array=[2,4,-5,6,-7,-8,-9,3,5,9,78]
var k=[]
for(var i=0;i<array.length;i++){
    if(array[i]>0){
        k.push(array[i])
    }
}
console.log(k)
len=k.length/2+0.5
console.log(k[len-1])