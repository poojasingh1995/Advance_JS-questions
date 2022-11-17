const outer=((list)=>{
    // var i=0
    sum=0
    for(var i=0;i<list.length;i++){
        sum=sum+list[i]
    }
    const inner=((list_1)=>{
        mul=0;
        for(var i=0;i<list_1.length;i++){
            mul=mul+list_1[i]
        }
        console.log("sum",sum)
        console.log("multiple",mul)
    })
    inner([1,2,3,4,5])   
})
outer([2,3,43])