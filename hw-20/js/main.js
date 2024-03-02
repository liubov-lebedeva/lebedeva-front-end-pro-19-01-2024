const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function getRandomSymbol(string) {
    let characterIndex = Math.round(Math.random() * (string.length - 1));
    return string[characterIndex];
}

function generateKey(length, characters) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += getRandomSymbol(characters);
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key);