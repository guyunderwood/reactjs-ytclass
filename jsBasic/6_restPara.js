// Rest Parameter

summation=(...numberArr)=>{

    let total = 0
    for(let number of numberArr) total += number    //number pulls each element in numberArr
    return total;
}

console.log(summation(50,100));
console.log(summation(50,100,1000));
console.log(summation(50,100,1000, 7500));