

const removeHyphens = (isbn) => isbn.split('').map((char) => char == '-' ? '' : char).join('');



const isValid10digitsIsbn = (isbn) => {
    isbn = removeHyphens(isbn);
    console.log(isbn);
    let sumproduc = isbn.split('').reduce((acc, char, i, array) => {
        return acc + (Number(char) * (array.length - i));
    }, 0);
    console.log(sumproduc);
    if (sumproduc % 11 == 0)
        return true;
    else
        return false;
}


const isValid13digitsIsbn = (isbn) => {
    isbn = removeHyphens(isbn);
    console.log(isbn);
    let sumproduc = isbn.split('').reduce((acc, char, i, array) => {
        return i % 2 == 0 ? acc + Number(char) * 1 : acc + Number(char) * 3;
    }, 0);
    console.log(sumproduc);
    if (sumproduc % 10 == 0)
        return true;
    else
        return false;
}



module.exports = { isValid13digitsIsbn, removeHyphens, isValid10digitsIsbn };