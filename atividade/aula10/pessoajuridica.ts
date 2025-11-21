import {Pessoa} from "./pessoa";

export class PessoaJuridica extends Pessoa {
    cnpj: string;

    constructor(nome: string, idade: number, altura: number, sexo: string, peso: number, cpf: string, cnpj: string) {
        super(nome, idade, altura, sexo, peso);
        this.cnpj = cnpj;
    }

    info() {
        console.log(`CNPJ: ${this.cnpj}`);
    }
}