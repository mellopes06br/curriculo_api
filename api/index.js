import "dotenv/config";
import cors from "cors";
import express from "express";

import db from "./models/index.js";

const app = express();

// --- Middlewares ---
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Currículo está no ar!');
});


const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {

    await db.sequelize.sync({ force: true });
    console.log('Tabelas sincronizadas com o banco de dados. 🔄');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🚀`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar ou iniciar o servidor: 🔴', error);
  }
}

iniciarServidor();