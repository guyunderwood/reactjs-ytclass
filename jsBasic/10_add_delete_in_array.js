// push     //add to last

const data = [10, 20, 30];
console.log("before push: " + data);

data.push(500);
console.log("after push 500: " + data);

data.push(...[1000, 2000, 30]);
console.log("after push array: " + data);

//pop       //delete the last element

data.pop(); 
console.log("after pop: " + data);

//shift     //delete first

data.shift()
console.log("after shift: " + data);

//unshift   //add first

data.unshift(999)
console.log("after unshift: " + data);