const readline = require('readline-sync');
console.log("-------------Bem-vindo ao Restaurante!-------------");
let userName = readline.question("Por favor, digite seu nome: ");
console.log(`Olá, ${userName}! Vamos começar o seu pedido.`);

// Entradas e pratos principais disponíveis com preços
const entradas = [
    { nome: "Salada Caesar", preco: 15.0 },
    { nome: "Bruschetta", preco: 12.0 },
    { nome: "Sopa de Legumes", preco: 10.0 }
];
const principais = [
    { nome: "Filé Mignon", preco: 40.0 },
    { nome: "Frango Grelhado", preco: 28.0 },
    { nome: "Lasanha Vegetariana", preco: 25.0 }
];
const bebidas = [
    { nome: "Refrigerante", preco: 5.0 },
    { nome: "Suco Natural", preco: 7.0 },
    { nome: "Água Mineral", preco: 3.0 }
];
const sobremesas = [
    { nome: "Torta de Limão", preco: 10.0 },
    { nome: "Pudim", preco: 8.0 },
    { nome: "Fruta da Estação", preco: 5.0 }
];

// Função para exibir opções e obter escolha do usuário
function escolherOpcao(opcoes, tipo) {
    let mensagem = `Escolha uma ${tipo}:\n`;
    opcoes.forEach((opcao, index) => {
        mensagem += `${index + 1}. ${opcao.nome} - R$ ${opcao.preco.toFixed(2)}\n`;
    });
    let escolha = parseInt(readline.question(mensagem));
    while (isNaN(escolha) || escolha < 1 || escolha > opcoes.length) {
        escolha = parseInt(readline.question("Opção inválida. " + mensagem));
    }
    return opcoes[escolha - 1];
}

// Escolha da entrada
const entradaEscolhida = escolherOpcao(entradas, "entrada");

// Escolha do prato principal
const principalEscolhido = escolherOpcao(principais, "prato principal");

// Escolha da bebida
const bebidaEscolhida = escolherOpcao(bebidas, "bebida");

// Escolha da sobremesa
const sobremesaEscolhida = escolherOpcao(sobremesas, "sobremesa");

// Calcula o valor total
const total = entradaEscolhida.preco + principalEscolhido.preco + bebidaEscolhida.preco + sobremesaEscolhida.preco;


//Escolha da forma de pagamento
let method = ["Cartão", "Dinheiro"];

let choice = readline.question(`----------Escolha a forma de pagamento:\n1. ${method[0]}\n2. ${method[1]}\nDigite o número correspondente: `);

switch (choice) {
  case 1:
    console.log("------Você escolheu pagar com Cartão.");
    break;
  case 2:
    console.log("------Você escolheu pagar com Dinheiro.");
    break;
  default:
    console.log("Por favor, escolha um método de pagamento válido.");
}

// Exibe o pedido final
console.log("---------------Recibo-------------------------");
console.log(`Nome: ${userName}`);
console.log(`Entrada: ${entradaEscolhida.nome} - R$ ${entradaEscolhida.preco.toFixed(2)}`);
console.log(`Prato Principal: ${principalEscolhido.nome} - R$ ${principalEscolhido.preco.toFixed(2)}`);
console.log(`Bebida: ${bebidaEscolhida.nome} - R$ ${bebidaEscolhida.preco.toFixed(2)}`);
console.log(`Sobremesa: ${sobremesaEscolhida.nome} - R$ ${sobremesaEscolhida.preco.toFixed(2)}`);
console.log(`Forma de pagamento: ${method[choice - 1]}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log("----------------------------------------------");
//Grupo 7: Mário, Ícaro, Andreza, Danilo e Jõao