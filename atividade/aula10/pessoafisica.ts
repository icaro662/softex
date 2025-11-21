import {Pessoa} from "./pessoa";

export class PessoaFisica extends Pessoa {
    cpf: string;
    rg: string;

    constructor(nome: string, idade: number, altura: number, sexo: string, peso: number, cpf: string, rg: string) {
        super(nome, idade, altura, sexo, peso);
        this.cpf = cpf;
        this.rg = rg;
    }

    info() {
        console.log(`CPF: ${this.cpf}, RG: ${this.rg}`);
    }
}
