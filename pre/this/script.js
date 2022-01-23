// console.log(this);//window

// function fn() {
//     console.log(this);//window
// }
// fn();

// let obj = {
//     name: "amir afjal",
//     func: fn
// }
// obj.func(); //selfobject

// METHOD-1 bind function

// function fn() {
//     console.log(this);
//     function abc() {
//         console.log(this);
//     }
//     let ret = abc.bind(this);
//     ret();

// }

// let obj = {
//     name: "amir afjal",
//     func: fn
// }
// obj.func();


// METHOD-2 arrow function

function fn() {
    console.log(this);
    abc = () => {
        console.log(this);
    }
    abc();
}

let obj = {
    name: "amir afjal",
    func: fn
}
obj.func();
