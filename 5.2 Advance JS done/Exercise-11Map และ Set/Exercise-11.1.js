function unique(arr) {
    arr = new Set(arr);
    return Array.from(arr);
  }
  
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  alert(unique(values));