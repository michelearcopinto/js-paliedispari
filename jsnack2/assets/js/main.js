const evenOddSelect = document.getElementById('evenOddSelect');
const evenOddSelectInitialValue = evenOddSelect.value;
const insertNumber = document.getElementById('insertNumber');
const numberComputer = document.getElementById('numberComputer');
const startButton = document.getElementById('startButton');
const sumOutput = document.getElementById('sumOutput');
const winnerOutput = document.getElementById('winnerOutput');

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumNumbers(num1, num2) {
    return (num1 + num2);
}

let numberCheck;

function isEvenIsOdd(num) {

    if (num % 2 == 0) {

        numberCheck = "Even";

    } else {

        numberCheck = "Odd";
    }

    return numberCheck;
}

let sum;

startButton.addEventListener('click', function () {

    if (insertNumber.valueAsNumber < 1 || insertNumber.valueAsNumber > 5 || isNaN(insertNumber.valueAsNumber)) {

        alert('Il valore non è corretto.');
        return;

    } else if (evenOddSelect.value === evenOddSelectInitialValue) {

        alert('Scegli se il numero sarà pari o dispari.');
        return;

    } else {

        numberComputer.valueAsNumber = randomNum(1, 5);

        sum = sumNumbers(insertNumber.valueAsNumber, numberComputer.valueAsNumber);

        isEvenIsOdd(sum);

        sumOutput.valueAsNumber = sum;

        let result, color;

        if (numberCheck === evenOddSelect.value) {

            result = 'Giocatore'
            color = 'green'

        } else {

            result = 'Computer'
            color = 'red'
        }

        winnerOutput.textContent = result;
        winnerOutput.style.color = color;
    }

    console.log(`Guess: ${evenOddSelect.value}`)
    console.log(`Numero Giocatore: ${insertNumber.valueAsNumber}`)
    console.log(`Numero Casuale Computer: ${numberComputer.valueAsNumber}`);
    console.log(`Somma: ${sum}`);
    console.log(`La somma è: ${isEvenIsOdd(sum)}`);
})
