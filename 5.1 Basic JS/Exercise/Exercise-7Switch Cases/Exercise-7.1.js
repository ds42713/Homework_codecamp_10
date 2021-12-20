let browser = prompt("What is your browser?");

if (browser === "Edge" || browser === "edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "chrome" ||
  browser === "Firefox" ||
  browser === "firefox" ||
  browser === "Safari" ||
  browser === "safari" ||
  browser === "Opera" ||
  browser === "opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}