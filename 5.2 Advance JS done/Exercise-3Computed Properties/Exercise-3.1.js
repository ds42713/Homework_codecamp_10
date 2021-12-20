let key = prompt("Enter key: ")
let obj = {}

while (key !== "stop") {
  let value = prompt(`Enter ${key} value: `)
  obj[key] = value
  key = prompt("Enter key: ")
}
console.log(obj)
