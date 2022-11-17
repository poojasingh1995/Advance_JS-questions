const dict1={
    name:"pooja",
    education:"graducation",
    age:23,
    feature:function(hobby,description){
        console.log(`my name is ${this.name},
and my qualification is ${this.education} completed,
and my age is ${this.age},
my hobby is ${hobby} and I am a ${description}`)
    }
}
const dict2={
    name:"kajal",
    education:"graducation",
    age:20,
}
// dict1.feature.call(dict1)
dict1.feature.apply(dict2,["dancing","student"])