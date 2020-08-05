### Server (Back-End)
- Node.js
- API REST

### Como rodar ?

#### Configurando o Ambiente
[Ambiente NLW](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)

```console
foo@bar:~$ yarn install
foo@bar:~$ yarn start
```

#### Recriando banco SQLite
1. Deletar arquivo database.sqlite na pasta database
2. Rodar yarn knex:migrate

### Criando o Projeto e Instalando dependências
```console
foo@bar:~$ yarn init -y

foo@bar:~$ yarn add typescript -D

foo@bar:~$ yarn tsc --init

foo@bar:~$ yarn add ts-node-dev -D

foo@bar:~$ yarn add express

foo@bar:~$ yarn add @types/express -D

foo@bar:~$ yarn add knex sqlite3

foo@bar:~$ yarn add cors

foo@bar:~$ yarn add @types/cors -D
```

### Identificando casos de uso

#### Funcionalidades

###### Conexões

- Rota pra listar o total de conexões realizadas;
- Rota para criar uma nova conexão;

###### Aulas

- Rota para criar uma aula;
- Listar aulas;
  - Filtrar por matéria, dia da semana e horário;

