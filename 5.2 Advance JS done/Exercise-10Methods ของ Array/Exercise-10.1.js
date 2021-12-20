// 1.1
let array1 = [1, 2, 30, 400];
let array2 = array1.map( (x)=> {
    return x * 2;
})
console.log(array1);
console.log(array2); // array2 [2, 4, 60, 800]
// 1.2
let array1 = [1, 2, 3, 4];
let array2 = array1.map( (x)=> {
    return `${x}`;
})
console.log(array1);
console.log(array2); // array2 ["1", "2", "3", "4"]
// 1.3
let array1 = [1, "1", 2, {}];
let array2 = array1.map( (x)=> {
    return typeof(x);
})
console.log(array1);
console.log(array2); // ["number", "string", "number", "object"]
//1.4
let array1 = ["apple", "banana", "orange"];
let array2 = array1.map( (x)=> {
    return x.toUpperCase();
})
console.log(array1);
console.log(array2); // ["APPLE", "BANANA", "ORANGE"]
//1.5
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        ];
let array2 = array1.map( (x)=> {
    return x.name;
})
console.log(array1);
console.log(array2); // array2 ["apple", "banana", "watermelon"]
//1.6
let array1 = [
        { name: "apple", age: 14 },
        { name: "banana", age: 18 },
        { name: "watermelon", age: 32 },
        ];
let array2 = array1.map( (x)=> {
    return x.age;
})
console.log(array1);
console.log(array2); // array2 [14, 18, 32]
//1.7
let array1 = [
        { name: "apple", surname: "London" },
        { name: "banana", surname: "Bangkok" },
        { name: "watermelon", surname: "Singapore" },
        ];
let array2 =array1.map( (x)=> {
    return `${x.name}  ${x.surname}`;
})
console.log(array1);
console.log(array2); // array2 ["apple London", "banana Bangkok", "watermelon Singapore"]
//1.8
let array1 = [1,3,4,5,6,7,8];
let array2 = array1.map( (x)=> {
    if (x%2 === 0) {
    return "even";
    }
    return "odd";
})
console.log(array1);
console.log(array2); // array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]
//1.9
let array1 = [1, -3, 2, 8, -4, 5];
let array2 = array1.map( (x)=> {
    return Math.abs(x);
})
console.log(array1);
console.log(array2); // array2 [1, 3, 2, 8, 4, 5]
//1.10
let array1 = [100, 200.25, 300.84, 400.3];
let array2 = array1.map( (x)=> {
    return (x).toFixed(2);
})
console.log(array1);
console.log(array2); // ["100.00", "200.25", "300.84", "400.30"]
//1.11
let array1 = [
        { name: "apple", birth: "2000-01-01" },
        { name: "banana", birth: "1990-10-01" },
        { name: "watermelon", birth: "1985-12-01" },
        ]
let array2 = array1.map( (x)=> {
    let newArray = {};
    let age = (new Date().getFullYear() - Number(x.birth.slice(0, 4)));

    for (let key in x) {
        newArray[key] = x[key]
    }
    newArray.age = age;
    return newArray;
})
console.log(array1);
console.log(array2); 
//1.12
let array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
let array2 = array1.map( (x, index)=> {
  let date = array1[index].birth.slice(8, 10);
  let month = new Date(array1[index].birth).toDateString().slice(4, 7);
  let year = array1[index].birth.slice(0, 4);
  return `<tr> <td>${array1[index].name}</td> <td>${date} ${month} ${year}</td> </tr>`;
});
console.log(array1);
console.log(array2);
