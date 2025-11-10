import cors from "cors";
import express from "express";

// Rotas
import personRoutes from './routes/personRoutes.js';
import experienceRoutes from './routes/experienceRoutes.js';
import abilitiesRoutes from './routes/abilitiesRoutes.js';


const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.use('/api/pessoa', personRoutes);
app.use('/api/experiencia', experienceRoutes);
app.use('/api/habilidade', abilitiesRoutes);


app.get('/', (req, res) => {
  res.send('API do Currículo está no ar!');
});

export default app;