# API REST de Gerenciamento de Notas de Alunos usando Node.js

Este projeto é um servidor básico construído em Node.js que oferece uma API REST para o gerenciamento de notas de alunos. O servidor permite realizar operações de **CRUD (Create, Read, Update, Delete)** nas notas dos alunos, utilizando o módulo ES e a biblioteca `uuid` para gerar identificadores únicos.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript que permite a criação de servidores web.
- **Módulo ES**: Utilizado para importação e exportação de módulos, substituindo o `require`.
- **HTTP**: Módulo nativo do Node.js para criar o servidor.
- **UUID**: Biblioteca para gerar identificadores únicos universais para as notas dos alunos.
- **Thunder Client**: Extensão do VSCode utilizada para testar as rotas da API.
- **VSCode**: Editor de código onde o projeto foi desenvolvido.
- **Git**: Sistema de controle de versão para gerenciar o código fonte.

## Funcionalidades da API

A API oferece as seguintes funcionalidades para o gerenciamento de notas:

1. **GET /grades**: Retorna todas as notas dos alunos.
2. **POST /grades**: Adiciona uma nova nota para um aluno.
3. **PUT /grades/:id**: Atualiza a nota de um aluno existente com base no ID.
4. **DELETE /grades/:id**: Remove uma nota específica com base no ID.

O servidor estará rodando em http://localhost:3000

## Testando a API com Thunder Client

1. Abra o VSCode e carregue o projeto.
2. Abra a extensão Thunder Client.
3. Crie uma nova coleção de requisições para testar as rotas GET, POST, PUT e DELETE implementadas no servidor.
4. Execute as requisições e verifique as respostas do servidor.
