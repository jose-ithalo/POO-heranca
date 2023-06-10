export class Mamifero {

    nome: string
    peso: number
    altura: number
    comprimento: number

    constructor(nome: string, peso: number, altura: number, compr: number) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
        this.comprimento = compr
    }

    comer(): string {
        return 'Animal Comendo';
    }
}