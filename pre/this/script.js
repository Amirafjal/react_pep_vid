console.log(this);//window

function fn() {
    console.log(this);//window
}
fn();

let obj = {
    name: "amir afjal",
    func: fn
}
obj.func(); //selfobject