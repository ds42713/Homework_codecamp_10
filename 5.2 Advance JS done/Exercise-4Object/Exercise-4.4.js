function sum(obj) {
    let totalSalaries = 0;
    for (key in obj) {
      totalSalaries += obj[key]
    }
    return totalSalaries
  }
  
let salaries = {
    man1: 1000,
    man2: 1200,
    man3: 1700,
  };

  sum(salaries)
  console.log(sum(salaries))
  