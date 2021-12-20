function sumInput() {
    let value = prompt("Input :")
    let sum = 0
    let addedInput = []
  
    while (isFinite(value) === true) {
      addedInput.push(Number(value))
      sum += Number(value)
      value = prompt("Input :")
    }
    return `Total Input = ${sum}`
  }
  
  console.log(sumInput())