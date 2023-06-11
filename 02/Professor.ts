import { Aluno } from "./Aluno";
import { IUsuario, Usuario } from "./Usuario";

export class Professor extends Usuario {

    constructor(usuario: IUsuario) {
        super(usuario);
    }

    lancarNota(aluno: Aluno, nota: number): void {
        aluno.notas.push(nota);
    }
}