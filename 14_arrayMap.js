// array map

const numbers = [10, 20, 30, 40]
const result = numbers.map(e=>{
    const a = e*2
    return a
})

// const result = number.map(e=>e*2)    // the same as above

// [10, 20, 30, 40] -> [20, 40, 60, 80]
console.log(result)

const weather = ["raining", "sunny", "thunderstorm", "cloudy", "foggy", "snow"]
console.log(weather)
const result2 = weather.map((e,i)=>{
    return `Day ${i+1}, Weather: ${e}`
})
console.log(result2)

const weather2 = [
    {day: "01/06/2564", weather: "sunny", temp: 27},
    {day: "03/06/2564", weather: "raining", temp: 23},
    {day: "04/06/2564", weather: "cloudy", temp: 18}
]

const result3 = weather2.map(e=>e.weather)
console.log(result3)