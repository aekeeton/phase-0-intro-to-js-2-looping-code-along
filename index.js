// Code your solutions in this file

function writeCards(names, event) {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(n) {
    while (n > -1) {
        console.log(n)
        n--;
    }
}