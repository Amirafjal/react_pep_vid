let obj = {
    name: "amir",
    address: {
        city: "bengaluru", state: "karnataka"
    },
    skills: ["html", "css", "react.js"]
}

let obj2 = { ...obj, address: { ...obj.address }, skills: [...obj.skills] };
obj2.name = "afjal";
obj2.address.city = "mysuru";
obj2.skills.push("node.js");
console.log(obj);
console.log(obj2);

