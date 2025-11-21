//Variável da readline-sync (library)
var readLineSync = require("readline-sync")

//Pergunta ao usuário
var userName = readLineSync.question("Qual é o seu nome? ")
console.log(userName)

//Perguntar idade
var userAge = readLineSync.question("Qual é a sua idade? ")
console.log(userAge)

//Perguntar fruta favorita
var userFruit = readLineSync.question("Qual é a sua fruta favorita? ")
console.log(userFruit)

//Variável de requisito
var fruta = "banana"

//Verificação de maioridade
if (userAge >= 18 && userFruit == fruta) { //Se a idade for maior ou igual a 18, e fruta favorita ser banana
    console.log("Aprovado")
}else { //Se a idade for menor que 18, e fruta favorita diferente de banana
    console.log("Reprovado")
}