function draw(n) {
    let output = ""
    for (let x = 1; x <= n; x++) {
      for (let y = 0; y < n; y++) {
        output = output + x
      }
      output = output + "\n"
    }
    console.log(output)
  }
  