var input = document.getElementById("guessField");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 101) + 1;
    document.getElementById("randomNumber").textContent = "I feel myself lucky: " + randomNumber;
    return randomNumber; 
}

function checkGuess() {
    var userGuess = parseInt(document.getElementById('guessField').value);
    var randomNumber = parseInt(document.getElementById("randomNumber").textContent.split(": ")[1]); 

    if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
        document.getElementById('message').innerHTML = 'Skriv et nummer mellom 0 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `Gratulerer det er riktig nummer ${randomNumber}!`;
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = 'Tallet er høyt! Prøv igjen.';
    } else {
        document.getElementById('message').innerHTML = 'Tallet er lavt! Prøv igjen.';
    }
}