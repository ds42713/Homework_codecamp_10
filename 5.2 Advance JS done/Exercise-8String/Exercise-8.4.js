function extractCurrencyValue(string, rate) {
    let value = Number.parseFloat(string.slice(1))
    return value * Number(rate)
  }
  
  console.log(extractCurrencyValue("$120", 30.5) === 3660)
