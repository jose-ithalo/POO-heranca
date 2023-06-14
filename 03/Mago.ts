import { Personagem, TPersonagem } from "./Personagem";

export class Mago extends Personagem {

    qtdMagia: number = 5;

    constructor(mago: TPersonagem) {
        super(mago);
    }

    usarMagia(): string {

        if (this.qtdMagia > 0) {
            this.qtdMagia--;

            return 'Magia usada'
        }

        return 'Magia indisponível'
    }

    criarMagia(): void {

        this.qtdMagia++;
    }
}