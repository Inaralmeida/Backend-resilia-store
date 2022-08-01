# :construction: WIP - Reilia Store - Modulo 5 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Módulo 05.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Pré-Requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## Packages

- Express
- Nodemon

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/cinmcantu/ToDoAPI-T17.git
```

Entrando na pasta:

```
cd backend
```

Instalando os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

## Rotas implementadas

### Produtos

**GET /produtos**

    Esquema da resposta
    ```json
     {
      "produtos": [
        {
          "id": 3,
          "nome_completo": "Kit Gamer Completo Teclado Mouse Headset Mousepad - Bmax",
          "nome_abreviado": "Kit Gamer Completo",
          "url": "https://a-static.mlcdn.com.br/800x560/kit-gamer-completo-teclado-mouse-headset-mousepad-bmax/d-maxshop/15869664455/b83b5560df2d7a64586ba2023a079326.jpg",
          "categoria": "Acessorios",
          "marca": "Bmax",
          "avaliacao": 2,
          "cor": "preto",
          "preco": 179.99,
          "porcentagem_desconto": 0,
          "descricao": "Kit Gamer Teclado Semi Mecânico + Mouse Gamer E Headset P2 + Adaptador Mousepad"
        },
      ],
      "erro": false
    }
    ```

**GET /produtos/categoria/acessorios**

    Esquema da resposta
    ```json
    {
      "produtos": [
        {
          "id": 3,
          "nome_completo": "Kit Gamer Completo Teclado Mouse Headset Mousepad - Bmax",
          "nome_abreviado": "Kit Gamer Completo",
          "url": "https://a-static.mlcdn.com.br/800x560/kit-gamer-completo-teclado-mouse-headset-mousepad-bmax/d-maxshop/15869664455/b83b5560df2d7a64586ba2023a079326.jpg",
          "categoria": "Acessorios",
          "marca": "Bmax",
          "avaliacao": 2,
          "cor": "preto",
          "preco": 179.99,
          "porcentagem_desconto": 0,
          "descricao": "Kit Gamer Teclado Semi Mecânico + Mouse Gamer E Headset P2 + Adaptador Mousepad"
        },
      ],
      "erro": false
    }
    ```

**GET /produtos/id/3**

    Esquema da resposta
    ```json
    {
      "produtos": [
        {
          "id": 3,
          "nome_completo": "Kit Gamer Completo Teclado Mouse Headset Mousepad - Bmax",
          "nome_abreviado": "Kit Gamer Completo",
          "url": "https://a-static.mlcdn.com.br/800x560/kit-gamer-completo-teclado-mouse-headset-mousepad-bmax/d-maxshop/15869664455/b83b5560df2d7a64586ba2023a079326.jpg",
          "categoria": "Acessorios",
          "marca": "Bmax",
          "avaliacao": 2,
          "cor": "preto",
          "preco": 179.99,
          "porcentagem_desconto": 0,
          "descricao": "Kit Gamer Teclado Semi Mecânico + Mouse Gamer E Headset P2 + Adaptador Mousepad"
        },
      ],
      "erro": false
    }
    ```

**POST /produtos/novo**

    Esquema da resposta
    ```json
    {
      "msg": "Produto adicionado com sucesso",
      "erro": false
    }
    ```

**PATCH /produtos/alterar/3**

    Esquema da resposta
    ```json
    {
      "msg": "Produto alterado com sucesso",
      "erro": false
    }
    ```

**DLETE /produtos/deletar/3**

    Esquema da resposta
    ```json
    {
      "msg": "Produto deletado com sucesso",
      "erro": false
    }
    ```
