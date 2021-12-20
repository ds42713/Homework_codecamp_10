let key = prompt("Enter fruit's name: ")
let obj = {}

while (key !== "stop") {
  let value = prompt(`Enter ${key} quantity: `)
  if (Number(value) > 1) {
    key = key + "s"
  }
  obj[key] = value
  key = prompt("Enter fruit's name: ")
}
console.log(obj)
