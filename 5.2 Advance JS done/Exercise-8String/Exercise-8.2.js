function checkSpam(word1, word2) {
    let x = 0
    let y = 0
    let n = 0
    while (true) {
        x = text.indexOf(word1, x)
        y = text.indexOf(word2, y)
        if (x < 0) break                        
        if (y < 0) break                           
        console.log(`Word "${word1}" at ${x}`)
        console.log(`Word "${word2}" at ${y}`)
        x++
        y++
        n++
    }

    if (n <= 0) return false
    
    return true
}
text = ""
console.log( checkSpam("xxx", "viagra") )