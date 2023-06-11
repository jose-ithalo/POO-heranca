export interface IUsuario {
    nome: string,
    email: string,
    telefone: number,
    senha: string,
}

export class Usuario {
    private nome: string
    private email: string
    private telefone: number
    private senha: string

    constructor(usuario: IUsuario) {
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.telefone = usuario.telefone;
        this.senha = usuario.senha;
    }

    autenticar(senha: string): string {

        if (this.senha === senha) {
            return 'Usuário logado.';
        }

        return 'Senha inválida.'
    }
}