### Server (Back-End)
- Node.js
- API REST

### Como rodar ?

#### Configurando o Ambiente
[Ambiente NLW](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)

```sh
# Instala as dependências
~$ yarn install

# Executa o projeto
~$ yarn start
```

#### Recriando banco SQLite
1. Deletar arquivo database.sqlite na pasta database
2. Rodar `yarn knex:migrate`

### Rotas

[Arquivo do Insomnia](src/utils/Insomnia_2020-08-06.json)

#### api
> http://localhost:3333

|Rota|Método HTTP|Parâmetros|Descrição
|:---:|:---:|:---:|:---:|
|`/classes`| POST| JSON| Criação de classes(cronograma) pelo professor|
|`/classes`| GET| QUERY| Listagem de professores
|`/connections`| POST| JSON| Criação da conexão de alunos com professores
|`/connections`| GET| No Body| Retorna o total de conexões de alunos e professores

### Requisição e Resposta

* `POST /classes`

<hr />

Request body:
```json
{
  {
	"name": "Emmanuella Albuquerque",
	"avatar": "https://avatars1.githubusercontent.com/u/57198678?s=460&u=18118f08f358d2615421a0694cc00b1c10b8bba0&v=4",
	"whatsapp": "98912137654",
	"bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus, eveniet corrupti nisi aliquid enim excepturi, vel cumque fugiat exercitationem, praesentium perferendis amet sunt esse vero voluptatem consequatur suscipit maxime.",
	"subject": "Matemática",
	"cost": 80,
	"schedule": [
		{ "week_day": 1, "from": "8:00", "to": "12:00" },
		{ "week_day": 3, "from": "10:00", "to": "18:00" },
		{ "week_day": 4, "from": "8:00", "to": "12:00" }
	]
  }
}
```

Response:
```
201 Created,
No body returned for response
```

* `GET /classes`

<hr />

Request Query params:

```sh
# URL Preview:
http://localhost:3333/classes?week_day=1&subject=Matem%C3%A1tica&time=11%3A00

# Values
week_day = 2
subject = Matemática
time = 11:00
```

Response:
```sh
200 OK,

# Array com todos os professores que correspondem aos valores de entrada
[]
```

```json
[
  {
    "id": 1,
    "subject": "Matemática",
    "cost": 80,
    "user_id": 1,
    "name": "Emmanuella Albuquerque",
    "avatar": "https://avatars1.githubusercontent.com/u/57198678?s=460&u=18118f08f358d2615421a0694cc00b1c10b8bba0&v=4",
    "whatsapp": "98912137654",
    "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ducimus, eveniet corrupti nisi aliquid enim excepturi, vel cumque fugiat exercitationem, praesentium perferendis amet sunt esse vero voluptatem consequatur suscipit maxime."
  }
]
```

* `POST /connections`

<hr />

Request body:
```json
{
	"user_id": 1
}
```

Response:
```
201 Created,
No body returned for response
```

* `GET /connections`

<hr />

Response:
```
200 OK,
```

```json
{
  "total": 9
}
```


### Criando o Projeto e Instalando dependências
```sh
# Inicia arquivo de gerenciamento de dependências
~$ yarn init -y

# Instala o typescript 
~$ yarn add typescript -D

# Cria arquivo de configuração do typescript
~$ yarn tsc --init

# Auto-reload para Nodejs com TypeScript
~$ yarn add ts-node-dev -D

# Framework Node.js que auxilia na construção de aplicações web. 
~$ yarn add express

# Tipagem do Express
~$ yarn add @types/express -D

# SQL Query Builder para Javascript (Construtor de Consulta)
# knex sqlite module
~$ yarn add knex sqlite3

# Cross-origin resource sharing: compartilhando
# recursos entre diferentes origens.
~$ yarn add cors

# Tipagem do Cors
~$ yarn add @types/cors -D

~$ yarn add bcrypt

~$ yarn add jwt-tokens
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

