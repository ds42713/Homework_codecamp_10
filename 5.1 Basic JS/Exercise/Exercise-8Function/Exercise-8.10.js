function draw(n) {
    let output = ""
    let temp = 1
    let counter = 1
    for (let i = 0; i < n; i++) {
        temp = 1
        for (let j = 0; j < n; j++) {
            output = output + (temp * counter);
            temp++
        }
        output = output + "\n";
        counter++
    }
    console.log(output)
}