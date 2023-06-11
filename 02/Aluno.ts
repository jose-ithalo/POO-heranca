import { IUsuario, Usuario } from "./Usuario";

export class Aluno extends Usuario {

    public notas: number[] = [];

    constructor(usuario: IUsuario) {
        super(usuario);
    }

    obterMedia(): number {

        let contador: number = 0;
        let total: number = 0;

        for (let nota of this.notas) {
            total += nota;
            contador++;
        }

        return total / contador;
    }

}