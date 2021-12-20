function draw(n) {
    let output = ""
    for (let x = n; x > 0; x--) {
      for (let y = n; y > 0; y--) {
        output = output + x
      }
      output = output + "\n"
    }
    console.log(output)
  }
  