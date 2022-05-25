// Spread Operator

const newArr = [100, 200, 300]

const data = [10, 20, ...newArr]

console.log(data.length)
console.log(data)

const colors = ["Red", "Green", "Blue"]
const allColors = ["Black", "White", ...colors]

console.log(allColors)

// push fn.

const miscColors = ["Rainbows", "Grey"]

allColors.push(...miscColors)
console.log(allColors)