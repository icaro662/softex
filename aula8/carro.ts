class Carro {
   public modelo : String 
   public marca : String 
   public placa : String
   public ano : Number 
   public cor : String

   constructor(marca, cor, modelo, placa, ano){
       this.cor = cor
       this.ano = ano
       this.placa = placa
       this.marca = marca
       this.modelo = modelo

   }

   ligar(){
       console.log("roqueroque")
   }
   desligar(){
       console.log("zzzzzz")
   }

}

const carro1 = new Carro("fit", "rosa", "pig123", "porquinho", 2025)
const carro2 = new Carro("sakura", "vermelho", "blmm3959", "Leaf", 2025)

carro1.ligar();
carro1.desligar();
console.log(carro1.ano)