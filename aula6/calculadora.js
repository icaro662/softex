let readline = require ('readline-sync')

let num1 = readline.question("Digite o primeiro número: ")
let num2 = readline.question("Digite o segundo número: ")

let operacao = readline.question("Digite a operação desejada (+, -, *, /): ")

let resultado

switch (operacao) {
    case "+":
        console.log("A soma é: " + (resultado = parseFloat(num1) + parseFloat(num2)))
        break
    case "-":
        console.log("A subtração é: " + (resultado = parseFloat(num1) - parseFloat(num2)))
        break
    case "*":
        console.log("A multiplicação é: " + (resultado = parseFloat(num1) * parseFloat(num2)))
        break
    case "/":
        console.log("A divisão é: " + (resultado = parseFloat(num1) / parseFloat(num2)))
        break
    default:
        console.log("Operação inválida.")
}
