import { Mamifero } from "./Mamifero";

export class Cachorro extends Mamifero {

    constructor(nome: string, peso: number, altura: number, compr: number) {
        super(nome, peso, altura, compr);
    }

    andar(): string {
        return 'Animal Andando';
    }

    latir(): string {
        return 'Cachorro Latindo';
    }
}