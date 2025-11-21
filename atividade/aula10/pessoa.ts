export class Pessoa {
   public nome: string;
   public idade: number;
   public altura: number;
   public sexo: string;
   public peso: number;


    constructor(nome: string, idade: number, altura: number, sexo: string, peso: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;
        this.peso = peso;
    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

    andar() {
        console.log(`${this.nome} está andando.`);
    }
}