import { Router } from 'express';

import {
  createHabilidade,
  getAllHabilidades,
  getHabilidadeById,
  updateHabilidade,
  deleteHabilidade
} from '../controllers/abilitiesController.js';
const router = Router();

// Rota para CRIAR (POST) e LER (GET) todas as habilidades
router.route('/')
  .post(createHabilidade)
  .get(getAllHabilidades);

// Rota para LER (GET por ID), ATUALIZAR (PUT) e DELETAR (DELETE)
router.route('/:id')
  .get(getHabilidadeById)
  .put(updateHabilidade)
  .delete(deleteHabilidade);

export default router;