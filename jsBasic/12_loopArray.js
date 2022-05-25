// for loop

const data = [10, 20, 30, 40, 50]

for(let i=0; i<data.length; i++){
    if (data[i]>=30) break;
    console.log(`Index ${i}: ${data[i]}`)
}

// for each     //can't use break and continue

let sum=0

data.forEach(element =>{
    console.log(`Elements in Array: ${element}`)
    sum+=element
    console.log("Sum is "+sum)
})

// for of      
for(const element of data){
    if (element>=30) break;
    console.log(`Elements in Array: ${element}`)
}