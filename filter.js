// const ages=[32,34,16,33,40]
// const result=ages.filter(a)
// console.log(result);
// function a(age){
//     return age>=18

// }
const fs=require("fs")
const user=require("readline-sync")

var student_name=[{name:"pooja singh"},
        {name:"kirti singh"},
        {name:"abiru rasid"}
    ]
fs.writeFileSync("data.json",JSON.stringify(student_name,null,4))
// console.log(s)
const buf_data=fs.readFileSync("data.json","utf-8")
console.log(buf_data)
let people=user.question("enter the user name:-")
// const names=buf_data;
// console.log(names)
var newnames=student_name.filter((a)=>{
    if ((a.name).includes(people)){
        return a.name
    }
})
console.log(newnames)

