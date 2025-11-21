//Variáveis
let a = 5;
let b = 6;
let c = 1;

//Calculo aritmético
let beta = ((b*b)- (4*a*c));
let resultado1 = (-b + Math.sqrt(beta)) / (2*a);
let resultado2 = (-b - Math.sqrt(beta)) / (2*a);

//Exibir resultados
console.log("As raízes da equação são: " + resultado1 + " e " + resultado2);

//date: 08-12-25