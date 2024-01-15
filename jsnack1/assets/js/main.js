const insertWord = document.getElementById('insertWord');
const checkButton = document.getElementById('checkButton');
const outputMessage = document.getElementById('outputMessage');

let wordArray = [];
let reversedWordArray = [];

let wordCheck = false;

function paliWord(word) {

    wordArray = Array.from(word.toUpperCase());

    for (let i = wordArray.length - 1; i >= 0; i--) {

        reversedWordArray.push(wordArray[i]);
    }

    console.log(wordArray);
    console.log(reversedWordArray);

    for (let i = 0; i < wordArray.length; i++) {

        console.log(wordArray[i], reversedWordArray[i]);

        if (wordArray[i] == reversedWordArray[i]) {

            wordCheck = true;

        } else {

            wordCheck = false;
            break;
        }
    }
}

checkButton.addEventListener('click', function () {

    paliWord(insertWord.value);

    let paliValue, colorOutput;

    if (wordCheck === true) {

        paliValue = '';
        colorOutput = 'green';

    } else {

        paliValue = 'NON';
        colorOutput = 'red';
    }

    outputMessage.innerHTML = `La parola <strong>${paliValue}</strong> è palindroma.`;
    outputMessage.style.color = `${colorOutput}`;

    console.log(wordCheck);

    wordArray = [];
    reversedWordArray = [];
})