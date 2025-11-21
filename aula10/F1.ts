import { Veiculo } from "./veiculo";

export class F1 extends Veiculo {
    public tamanho : Number;

    constructor(tamanho : Number, roda: number, placa: string){
        super(roda, placa);
        this.tamanho = tamanho;
    }

    velocidade(){

    }
}