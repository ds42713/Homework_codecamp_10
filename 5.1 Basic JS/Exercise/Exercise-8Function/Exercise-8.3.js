function draw(n) {
    let output = ""
    for (let x = 1; x <= n; x++) {
        output = output + x
    }
    for (let y = 0; y < n; y++) {
        console.log(output)
    }
}