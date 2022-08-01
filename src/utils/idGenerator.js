import { db } from "../data/db.js";

export const idGenerator = () => {
  const length = db.length;
  const ultimoProduto = db[length - 1];
  return ultimoProduto.id + 1;
};
