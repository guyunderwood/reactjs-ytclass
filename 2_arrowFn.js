//Arrow Fn.

// conventionally

function fullname(fname, lname){
    return fname+lname
}

console.log(fullname("Dominic", "Decoco"))

// Arrow

fullnamea=(fname, lname)=>fname+lname

setAge=(age)=>"Age = "+age

console.log(fullnamea("Dominic", "Decoco"))
console.log(setAge(20))