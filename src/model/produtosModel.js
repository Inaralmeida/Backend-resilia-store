import { db } from "../data/db.js";
import { idGenerator } from "../utils/idGenerator.js";

export const produtosModel = {
  buscarProdutos: () => {
    const prdutos = db;
    return prdutos;
  },
  buscarProdutoIndividual: (id) => {
    const produto = db.filter((produto) => produto.id == id);
    return produto[0];
  },
  buscarProdutoPorCategoria: (categoria) => {
    const produtos = db.filter(
      (produtos) => produtos.categoria.toLowerCase() == categoria.toLowerCase()
    );
    return produtos;
  },
  adicionarProduto: (body) => {
    db.push({ id: idGenerator(), ...body });
    return "Produto adicionado com sucesso";
  },
  editarProduto: (id, body) => {
    db.map((produto, index) => {
      if (produto.id == id) {
        db[index] = body;
      }
    });
    return "Produto alterado com sucesso";
  },
  deletarProduto: (id) => {
    let index = 0;
    db.map((produto, i) => {
      if (produto.id == id) {
        index = i;
      }
    });
    db.splice(index, 1);
    return "Produto deletado com sucesso";
  },
};
