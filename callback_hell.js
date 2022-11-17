function question(){
    setTimeout(()=>{
        function sum(list1){
            var sum1=0
            for(var i=0;i<list1.length;i++){
                sum1+=list1[i]
            }
            console.log(sum1)
        }
        sum([1,2,3,4,5])
        setTimeout(()=>{
            function multi(list2){
                var multi1=1;
                for(var i=0;i<list2.length;i++){
                    multi1*=list2[i]
                }
                console.log(multi1)
            }
            multi([2,4,6,8])
        },2000)
    },3000)
}
question()