function isEmpty(obj) {
    for (key in obj) {
      return false
    }
    return true
  }
  
let obj = {}
console.log(isEmpty(obj))