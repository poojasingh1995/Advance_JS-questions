function sum1(list1,list2){
    var sum=0
    for(var i=0;i<list1.length;i++){
        sum+=list1[i]
    }
    console.log(sum)
    list2();
}
function multi1(){
    var array=[1,2,3,4]
    var multi=1
    for(var i=0;i<array.length;i++){
        multi*=array[i]
    }
    console.log(multi)
}
sum1([2,3,4,5,6],multi1)