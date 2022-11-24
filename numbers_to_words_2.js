let numbersToWords = arr => arr
    .map(number =>
        (number < 0 ? 'Minus ' : '') +
        Math.abs(number).toString().split('').map(digit => [
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
        ][digit]).join(', '));

let numberArray = [10, 222, -9];
let wordArray = numbersToWords(numberArray);
console.log(wordArray);