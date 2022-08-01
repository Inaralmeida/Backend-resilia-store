import { produtosModel } from "../model/produtosModel.js";

export const produtosController = (app) => {
  app.get("/produtos", async (req, res) => {
    try {
      const produtos = produtosModel.buscarProdutos();
      res.json({ produtos, erro: false });
    } catch (erro) {
      res.json({
        msg: "Erro ao buscar usuarios",
        erro: erro,
      });
    }
  });
  app.get("/produtos/id/:id", (req, res) => {
    try {
      const id = req.params.id;
      const produto = produtosModel.buscarProdutoIndividual(id);
      if (produto.length == 0) throw new Error("ID invalido");
      else res.json({ produto, erro: false });
    } catch (erro) {
      res.json({
        msg: " ID invalido ou produto inexistente",
      });
    }
  });
  app.get("/produtos/categoria/:categoria", (req, res) => {
    try {
      const categoria = req.params.categoria;
      const produtos = produtosModel.buscarProdutoPorCategoria(categoria);
      if (produtos.length == 0) throw new Error("categoria invalida");
      else res.json({ produtos, erro: false });
    } catch (erro) {
      res.json({
        msg: "categoria invalida",
      });
    }
  });
  app.post("/produtos/novo", (req, res) => {
    try {
      const body = req.body;
      const msg = produtosModel.adicionarProduto(body);
      res.json({ msg, erro: false });
    } catch (erro) {
      res.json({
        msg: "Falha ao adicionar produto",
        erro: erro,
      });
    }
  });
  app.patch("/produtos/alterar/:id", (req, res) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const msg = produtosModel.editarProduto(id, body);
      res.json({ msg, erro: false });
    } catch (erro) {
      console.log(erro);
      res.json({
        msg: "Falha ao editar produto",
        erro: erro,
      });
    }
  });
  app.delete("/produtos/deletar/:id", (req, res) => {
    try {
      const id = req.params.id;
      const msg = produtosModel.deletarProduto(id);
      res.json({ msg, erro: false });
    } catch (erro) {
      res.json({
        msg: " ID invalido ou produto inexistente",
        erro: erro,
      });
    }
  });
};
