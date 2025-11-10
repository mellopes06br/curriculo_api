import { Router } from 'express';

import {
  createPessoa,
  getAllPessoas,
  getPessoaById,
  updatePessoa,
  deletePessoa
} from '../controllers/personController.js'; 

const router = Router();


// Rota para CRIAR (POST) e LER (GET) todas as pessoas
router.route('/')
  .post(createPessoa)
  .get(getAllPessoas);

// Rota para LER (GET por ID), ATUALIZAR (PUT) e DELETAR (DELETE)
router.route('/:id')
  .get(getPessoaById)
  .put(updatePessoa)
  .delete(deletePessoa);

export default router;