// method array pop menghapus nilai akhir
const numbers = [10, 20, 30, 40, 50];
const last = numbers.pop();

console.log(last); // 50
console.log(numbers.length); // 4

// method array push menambah nilai akhir 
let data = [1,2,3,4,5,6,7,8]
data.push("9")
console.log(data) // hasil =  [1, 2, 3, 4, 5, 6, 7, 8, "9"]

// method array shift menghapus nilai awal
let rio = [1,2,3,4,5,6,7,8]
data.shift()
console.log(data) // hasil =  [2, 3, 4, 5, 6, 7, 8]

// method array unshift ,ema,bah nilai awal
let nanto = [1,2,3,4,5,6,7,8]
data.unshift(0)
console.log(data) // hasil =  [0, 1, 2, 3, 4, 5, 6, 7, 8]