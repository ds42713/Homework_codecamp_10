let name = prompt("Please enter username")

if (name === "admin" || name === "Admin") {
  let password = prompt("Please enter password")

  if (password === "codecamp#10") {
    alert("ยินดีต้อนรับ")
  } else if (password === "" || password === "Esc" || password === "cancel") {
    alert("ยกเลิก")
  } else {
    alert("Wrong password")
  }
} else if (name === "" || name === "Esc" || name === "cancel") {
  alert("ยกเลิก")
} else {
  alert("ผมไม่รู้จักคุณ")
}
