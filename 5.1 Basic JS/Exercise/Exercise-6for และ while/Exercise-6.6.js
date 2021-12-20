let number1 = prompt("Player 1 please insert number from 1 - 100");

if (number1 > 0 && number1 <= 100) {
    while (true) {
        let number2 = +prompt("Player 2 please guess what number has inserted by Player 1 (1 - 100)");
        if (number1 === number2) {
            alert("Player 2 won!!");
            break;
        } else if (number1 < number2 && number2 <= 100) {
                alert("Too high");
        } else if (number1 > number2 && number2 >= 1) {
                alert("Too low");
        } else {
            alert("Please select 1 - 100");
        }
    }
} else {
    alert("GAME END!!");
}