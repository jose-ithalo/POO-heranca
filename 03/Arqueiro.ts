import { Personagem, TPersonagem } from "./Personagem";

export class Arqueiro extends Personagem {

    qtdFlechas: number = 1

    constructor(arq: TPersonagem) {
        super(arq);
    }

    lancarFlechas(): string {

        if (this.qtdFlechas > 0) {
            this.qtdFlechas--;
            return 'Flecha lançada'
        }

        return 'Falta de flecha'
    }

    construirFlechas(): void {

        this.qtdFlechas++;
    }
}