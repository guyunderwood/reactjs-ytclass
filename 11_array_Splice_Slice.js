// deleting elements
// splice(index that want to del, n, element that we want to add)

const data = [10, 20, 30, 40, 50]

console.log("before splice: "+data)
data.splice(1, 2, 999)      //del 20, 30, 40, add 999
console.log("after splice: "+ data)

// slice (first_index, last_index-1)

const data2 = [10, 20, 30, 40, 50]
const lastdata = data2.slice(1,3)
console.log("lastdata: "+lastdata)