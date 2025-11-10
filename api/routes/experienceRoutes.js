import { Router } from 'express';

import {
  createExperiencia,
  getAllExperiencias,
  getExperienciaById,
  updateExperiencia,
  deleteExperiencia
} from '../controllers/experiencesController.js';
const router = Router();

// Rota para CRIAR (POST) e LER (GET) todas as experiências
router.route('/')
  .post(createExperiencia)
  .get(getAllExperiencias);

// Rota para LER (GET por ID), ATUALIZAR (PUT) e DELETAR (DELETE)
router.route('/:id')
  .get(getExperienciaById)
  .put(updateExperiencia)
  .delete(deleteExperiencia);

export default router;