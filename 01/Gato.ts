import { Mamifero } from "./Mamifero";

export class Gato extends Mamifero {

    constructor(nome: string, peso: number, altura: number, compr: number) {
        super(nome, peso, altura, compr);
    }

    andar(): string {
        return 'Animal Andando';
    }

    miar(): string {
        return 'Gato Miando';
    }

}