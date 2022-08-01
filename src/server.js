import express from "express";
import cors from "cors";
import { produtosController } from "./controller/produtosController.js";

const port = 3300;

const app = express();

app.use(cors());
app.use(express.json());

produtosController(app);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
