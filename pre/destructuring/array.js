let arr = ['hi', 'i', 'am', 'amir ', 'afjal'];

// let a = arr[0];
// let b = arr[1];

// destructuring
// let [a, b, c, d] = arr;
// let [a, b, , d] = arr; //to skip value add extra commas.
let [a, b, c, d, e, extra = '...'] = arr; //can also declare extra values here.
console.log(a, b, c, d, e, extra);


