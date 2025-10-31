import "dotenv/config";
import cors from "cors";
import express from "express";

import models, { sequelize } from "./models";

const app = express();

// --- Middlewares ---
app.use(cors()); // Habilita o CORS
app.use(express.json()); // Habilita o Express para ler JSON no body


app.get('/', (req, res) => {
  res.send('API do Currículo está no ar!');
});

// --- Inicialização do Servidor e Sincronização do Banco ---
const PORT = process.env.PORT || 3000;

async function iniciarServidor() {
  try {
    // Sincroniza os models com o banco de dados
    // { force: false } garante que as tabelas não sejam recriadas
    await models.sequelize.sync({ force: false }); 
    console.log('Tabelas sincronizadas com o banco de dados. 🔄');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT} 🚀`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar ou iniciar o servidor: 🔴', error);
  }
}

iniciarServidor();