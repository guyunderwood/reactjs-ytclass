// working with objects

// const customer = {
//     custName : "Dominic",
//     age:20,
//     addr:"BKK"
// }

// Or pairing with const
// const for  data
const username = "dominic"
const age = 20
const addr = "BKK"

const customer = {
    custName : username,
    age,    //since const and prop share the same name
    addr,
    showData(){
        console.log("Customer Data: "+ username)
    }
}

console.log(customer);
customer.showData()
