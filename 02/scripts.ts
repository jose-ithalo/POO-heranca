import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const valter = new Professor({
    nome: 'Valter',
    email: 'valter@email.com',
    telefone: 78886544,
    senha: '47vt'
});

const rodrigo = new Aluno({
    nome: 'Rodrigo',
    email: 'rody@email.com',
    telefone: 945573221,
    senha: '123',
});

console.log(valter.autenticar('47vt'));

valter.lancarNota(rodrigo, 3);
valter.lancarNota(rodrigo, 7);
valter.lancarNota(rodrigo, 8);

console.log(rodrigo.obterMedia());

