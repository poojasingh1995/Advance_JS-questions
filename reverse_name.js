str=" I am Pooja"
a=[]
rev=str.split("");
console.log(rev)
for(var i=str.length-1;i>0;i--){
    if(rev[i]!=""){
        a.push(rev[i])
    }
}
console.log(a)