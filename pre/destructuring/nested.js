let obj = {
    name: 'amir afjal',
    address: {
        country: 'india',
        state: {
            pincode: 111111,
            ISD: +91
        }
    }
}

let { name } = obj;
let { address: { country: kontary } } = obj;
let { address: { state: { pincode: pin } } } = obj;
console.log(name, kontary, pin);