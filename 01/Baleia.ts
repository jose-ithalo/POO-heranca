import { Mamifero } from "./Mamifero";

export class Baleia extends Mamifero {

    constructor(nome: string, peso: number, altura: number, compr: number) {
        super(nome, peso, altura, compr);
    }

    nadar(): string {
        return 'Baleia Nadando';
    }
}