import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";


const mago = new Mago({ nome: 'Mago' });

const arqueiro = new Arqueiro({ nome: 'Arqueiro' });

mago.andar();
mago.andar();
mago.parar();

console.log(mago.usarMagia());
mago.criarMagia();
console.log(mago.usarMagia());
console.log(mago.qtdMagia);


console.log(arqueiro.lancarFlechas());
