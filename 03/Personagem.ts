export type TPersonagem = {
    nome: string,
    velocidade?: number
}

export class Personagem {

    nome: string
    velocidade: number

    constructor(personagem: TPersonagem) {

        this.nome = personagem.nome;
        this.velocidade = !personagem.velocidade ? 0 : personagem.velocidade;
    }

    andar(): void {
        this.velocidade++
    }

    parar(): void {
        this.velocidade = 0;
    }

}
