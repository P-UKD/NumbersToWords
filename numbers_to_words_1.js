let numbersToWords = arr => 
    arr.map(number => [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine'
    ][number]);

let numberArray = [0, 1, 6];
let wordArray = numbersToWords(numberArray);
console.log(wordArray);