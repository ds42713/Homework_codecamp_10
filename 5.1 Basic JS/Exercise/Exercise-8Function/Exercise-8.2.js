function draw(n) {
    let asterisk = ""
    for (let i = 0; i < n; i++) {
        asterisk += "*"
    }
    for (let j = 0; j < n; j++) {
        console.log(asterisk)
    }
}

draw(5)