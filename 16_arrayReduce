// Array Reduce

const data = [10, 20, 30, 40, 50]

const mapData = data.map(e=>100)
console.log(mapData)

const filterData = data.filter(e=>e>20)
console.log(filterData)

// array.reduce((ค่าที่ถูกประมวลผล, e)=>{}, starting value) // starting value = 0 i.e. value = 0
const sum = data.reduce((value, e)=>{
    console.log("value: "+value)
    const total = e+value
    console.log("total: "+total)
    return total
},0)

const sum2 = data.reduce((value, e)=>e+value,0)     // same as above
console.log(sum)
console.log(sum2)

const cart = [
    {name: "bag", price: 500},
    {name: "book", price: 900},
    {name: "camera", price: 5000},
]

const totalPrice = cart.reduce((value, e)=>{
    const total = e.price+value
    return total
}, 0)

const totalPrice2 = cart.reduce((value, e)=>e.price+value,0)    // same as above
console.log(totalPrice)
console.log(totalPrice2)
