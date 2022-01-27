const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ': ' ',
};

function decode(expr) {
    let result = [];
    let bitCode = expr.split('');
    let bitWordCode = [];
    let word = [];

    for (let i = 0 ; i < bitCode.length ; i +=10) {
        bitWordCode.push(bitCode.slice(i, i + 10));
    }

    for (let i = 0 ; i < bitWordCode.length ; i ++) {
        word = []
        for (let j = 0 ; j < 10; j += 2) {
            if (bitWordCode[i][j] === '*') {
                word.push(' ');
                break;
            }
            if (bitWordCode[i][j] === '1') {
                bitWordCode[i][j+1] === '0' ? word.push('.') : word.push('-');
            }
        }
        result.push(word);
    }

    return result.map(a => MORSE_TABLE[a.join('')]).join('');
}

module.exports = {
    decode
}

/*          10 = '.' 11 = '-'

 "00 10 10 10 10        ....        h
  00 00 00 00 10        .           e
  00 10 11 10 10        .-..        l   
  00 10 11 10 10        .-..        l
  000 11 11 11          ---         o
  **********
  0000101111
  0000111111
  0000101110
  0010111010
  0000111010";
*/