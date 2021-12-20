function draw(n) {
    let output = ""
    let counter = 1
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        output = output + counter
        counter++
      }
      output = output + "\n"
    }
    console.log(output)
  }
  