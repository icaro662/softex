let readline = require ('readline-sync')

let nome = readline.question("Qual é seu nome?")

switch (nome) {
    case "Icaro":
        console.log("Olá Icaro!");
        break;
    case "Andreza":
        console.log("Olá Andreza!");
        break;
    default:
        console.log("Desculpe, não reconheço seu nome.");
}




