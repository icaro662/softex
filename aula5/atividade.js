var readLineSync = require('readline-sync');

var userName = readLineSync.question("Qual é o seu nome? ");
console.log(userName);

var userDateOfBirthYear = readLineSync.question("Qual é o seu ano de nascimento? ");
console.log(userDateOfBirthYear);

var anoAtual = 2025;

if (anoAtual - userDateOfBirthYear == 18 || anoAtual - userDateOfBirthYear > 18) {
    console.log("Preso.");
} else {
    console.log("Liberado.");
}