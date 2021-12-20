function multiplyNumeric(obj, times) {
    for ( key in obj) {
      if (typeof obj[key] !== "number") continue
      obj[key] *= times
    }
  }
  
  let menu = {
    width: 200,
    height: 300,
    title: "menu",
  }
  
  multiplyNumeric(menu, 2)
  console.log(menu)
  