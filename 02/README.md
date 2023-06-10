![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## Sistema Escolar 

Num sistema escolar será necessário implementar o módulo de cadastro de usuários, onde cada usuário  
pode ser professor ou aluno. Algumas características são comuns para ambos e outras não. Sendo assim,  
analise as regras a seguir e implemente suas respectivas classes usando o conceito de herança. 

- Usuário

  - Nome
  - Email
  - Telefone
  - Senha
  - Autenticar
    - Essa ação recebe uma senha que será verificada com a senha do usuário e caso esteja correta  
    será retornado a mensagem: `Usuário logado`. Caso contrário, `Senha inválida`.

- Professor

  - Lançar nota do aluno
    - Essa funcionalidade deve receber o aluno e a nota a ser lançada

- Aluno
  
  - Notas
    - Esse atributo deve receber um array de notas
  - Obter Média
    - Esse método deve calcular a média do aluno com base nas notas lançadas pelo professor

Não é necessário transpilar o código.

Faça o teste com outor exemplos.

Faça o commit do resultado.

---
