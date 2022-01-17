let obj = {
    name: "amir",
    address: {
        city: "bengaluru", state: "karnataka"
    },
    skills: ["html", "css", "react.js"]
}

// let obj2 = { ...obj, address: { ...obj.address }, skills: [...obj.skills] }; // ( to give every object a new spread is called DEEP COPY ).

// obj2.name = "afjal";
// obj2.address.city = "patna";
// obj2.address.state = "bihar";
// obj2.address.pincode = 111111;
// obj2.skills.push("node.js");
// console.log(obj);
// console.log(obj2);

// shortcut for every reference spreading ::
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.name = "afjal";
obj2.address.city = "patna";
obj2.address.state = "bihar";
obj2.address.currentPlace = "aara";
obj2.address.pincode = 111111;
obj2.skills.push("node.js");
console.log(obj);
console.log(obj2);

