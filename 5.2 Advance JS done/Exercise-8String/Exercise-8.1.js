function ucFirst(string) {
    let word = string[0].toUpperCase()
    let sentence = string.slice(1)
  
    return word + sentence
  }
  
  console.log(ucFirst("string"))