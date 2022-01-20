let arr = ['apple', 'banana', 'orange', 'watermelon'];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
    let fruit = arr[i];
    if (fruit.length > 6) {
        newArr.push(fruit);
    }
}
console.log(arr);
console.log(newArr);