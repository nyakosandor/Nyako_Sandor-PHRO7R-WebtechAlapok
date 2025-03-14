let targetNumber;
let attempts;
const maxAttempts = 20;

function startGame() {
    targetNumber = Math.floor(Math.random() * 1000000);
    attempts = 0;
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('message').textContent = `Kérem a(z) ${attempts + 1}. tippet:`;
}

function submitGuess() {
    const guess = parseInt(document.getElementById('guess-input').value, 10);

    if (isNaN(guess)) {
        alert("Érvénytelen tipp! Kérem, adjon meg egy számot.");
        return;
    }

    attempts++;

    if (guess > targetNumber) {
        document.getElementById('message').textContent = `${attempts}. tipp nem talált: A megoldás kisebb. Kérem a(z) ${attempts + 1}. tippet:`;
    } else if (guess < targetNumber) {
        document.getElementById('message').textContent = `${attempts}. tipp nem talált: A megoldás nagyobb. Kérem a(z) ${attempts + 1}. tippet:`;
    } else {
        alert(`Gratulálok, ${attempts} lépésből eltaláltad!`);
        document.getElementById('game-container').style.display = 'none';
        return;
    }

    if (attempts >= maxAttempts) {
        alert("Sajnos ez most nem sikerült!");
        document.getElementById('game-container').style.display = 'none';
    }
}