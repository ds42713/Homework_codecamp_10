function draw(n) {
    let output = ""
    let temp = n ** 2
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            output = output + temp
            temp--;
        }
        output = output + "\n"
    }
    console.log(output)
}