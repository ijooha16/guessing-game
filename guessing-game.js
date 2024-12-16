const answer = 416;

let num = parseInt(prompt('Guess the number between 0-999!'));
while (num !== answer) {
    if (num > answer) { 
        num = parseInt(prompt(`Lower than "${num}"`));
    } else {
        num = parseInt(prompt(`Higher than "${num}"`));
    }    
}
alert('Congrats! You made it!');