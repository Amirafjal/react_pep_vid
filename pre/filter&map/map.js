let arr = [1, 2, 3, 4, 5];

let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] * 2;
// }

newArr = arr.map((value, idx) => {
    // console.log(value, idx);   
    return value * 2;
})


console.log(arr);
console.log(newArr);
