let obj = {
    name: 'amir afjal',
    city: 'bengaluru',
    state: "karnataka"
}

// let name = obj.name;
// let city = obj["city"];
// let { name, city, state } = obj;
// let { name, city, state, extra = 'India' } = obj;
let { name: fullname, city, state, extra = 'India' } = obj;//to provide different name 

console.log(fullname, city, state, extra);