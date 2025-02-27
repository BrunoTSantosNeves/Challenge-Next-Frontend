# Capputeeno

## Desafio Front-end - Rocketseat

Bem-vindo(a)! Este projeto faz parte de um desafio proposto pela Rocketseat para avaliar habilidades de desenvolvimento front-end.

## Descrição do Projeto

Este projeto consiste em uma aplicação e-commerce chamada **Capputeeno**, onde os produtos são carregados a partir de uma API GraphQL. O objetivo foi criar um ambiente funcional, permitindo a visualização e compra de produtos.

## Tecnologias Utilizadas

- **Next.js**
- **React.js**
- **Styled Components**
- **GraphQL**
- **Apollo Client**

## Estrutura de Diretórios

### Pasta `capputeeno`
```
capputeeno/
│-- public/
│-- src/
│   │-- components/
│   │-- pages/
│   │-- styles/
│   │-- utils/
│-- .gitignore
│-- package.json
│-- tsconfig.json
│-- README.md
```

### Pasta `frontendchallenge/api`
```
frontendchallenge/
│-- api/
│   │-- data/
│   │-- resolvers/
│   │-- schema/
│   │-- server.js
│   │-- package.json
```

## Como Rodar o Projeto

### Iniciando o Frontend
1. Acesse a pasta `capputeeno`
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

### Iniciando a API
1. Acesse a pasta `frontendchallenge/api`
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie a API:
   ```sh
   npm start
   ```

## Observações
- As imagens dos produtos são carregadas via GraphQL.
- Certifique-se de rodar a API antes de iniciar o frontend para evitar erros de carregamento de dados.

---

Este desafio foi desenvolvido como parte do repositório de desafios da **Rocketseat**: https://github.com/Rocketseat/frontend-challenge.

