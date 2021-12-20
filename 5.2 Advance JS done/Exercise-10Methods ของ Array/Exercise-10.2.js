//2.1
let array1 = [1, 2, 30, 400];
let array2 = array1.filter( (x)=> {
    return x > 10;
});
console.log(array1);
console.log(array2); // array2 [30, 400] // filter เลขที่มากกว่า 10
//2.2
let array1 = [1, 2, 3, 4];
let array2 = array1.filter( (x)=> {
    return x % 2 !== 0;
});
console.log(array1);
console.log(array2); // array2 [1, 3] // filter เลขคี่
//2.3
let array1 = [1, "1", 2, {}];
let array2 = array1.filter( (x)=> {
    return typeof(x) === "number";
})
console.log(array1);
console.log(array2); // array2 [1, 2] // filter Number
//2.4
let array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
let array2 = array1.filter( (x)=> {
    return x.length > 6;
})
console.log(array1);
console.log(array2); // ["pineapple", "watermeon"] // filter ตัวอักษร > 6
//2.5
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
        ];
let array2 = array1.filter( (x)=> {
    return x.age < 18;
})
console.log(array1);
console.log(array2); 
//2.6
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        { name: "pineapple", age: 16 },
        { name: "peach", age: 24 },
        ];
let array2 = array1.filter( (x)=> {
    return x.age !== 32;
})
console.log(array1);
console.log(array2); 
//2.7
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.filter( (x)=> {
    return x > 0;
})
console.log(array1);
console.log(array2); // array2 [1, 2, 8, 5] // filter เลขบวก
//2.8
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.filter( (x)=> {
    return x % 3 === 0;
})
console.log(array1);
console.log(array2); // array2 [3, 6] // filter เลขหาร 3 ลงตัว
//2.9
let array1 = ["peach", 1, -3, "2", {}, []];
let array2 = array1.filter( (x)=> {
    return typeof(x) === "string";
})
console.log(array1);
console.log(array2); // ["peach", "2"] // filter string
//2.10
let array1 = ["APPLE", "appLE", "PEACH", "PEach"];
let array2 = array1.filter( (x)=> {
    return x === x.toUpperCase();
})
console.log(array1);
console.log(array2); // ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว
//2.11
let array1 = [
        { name: "apple", birth: "2001-01-01" },
        { name: "banana", birth: "1990-10-10" },
        { name: "watermelon", birth: "1985-12-30" },
        { name: "peach", birth: "2002-10-13" },
        ];
let array2 = array1.filter( (x, index) =>{
    let month = (array1[index].birth).slice(5, 7);
    return month == 10;
})
console.log(array1);
console.log(array2); 
//2.12
let array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
let array2 = array1.filter( (x, index)=> {
  let year = array1[index].birth.slice(0, 4);
  return year < 2000;
});
console.log(array1);
console.log(array2); 