import db from '../models/index.js';

const Person = db.Person;

// 1. CREATE (Criar uma Pessoa)
// Rota: POST /api/pessoa
export const createPessoa = async (req, res) => {
  try {
    const novaPessoa = await Person.create(req.body);
    
 
    res.status(201).json(novaPessoa);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pessoa', error: error.message });
  }
};


// 2. GET (Buscar todas as Pessoas)
// Rota: GET /api/pessoa
export const getAllPessoas = async (req, res) => {
  try {

    const pessoas = await Person.findAll();
    res.status(200).json(pessoas);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pessoas', error: error.message });
  }
};



// 3. GET (Buscar Pessoa por ID - com Habilidades e Experiências)
// Rota: GET /api/pessoa/:id
export const getPessoaById = async (req, res) => {
  try {
    const { id } = req.params; 

    const pessoa = await Person.findByPk(id, {
      include: [
        { model: db.Experiences, as: 'experiences' }, 
        { model: db.Abilities, as: 'abilities' }
      ]
    });

    if (!pessoa) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }

    res.status(200).json(pessoa);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pessoa', error: error.message });
  }
};


// 4. UPDATE (Atualizar uma Pessoa)
// Rota: PUT /api/pessoa/:id
export const updatePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Person.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedPessoa = await Person.findByPk(id);
      res.status(200).json(updatedPessoa);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pessoa', error: error.message });
  }
};


// 5. DELETE (Deletar uma Pessoa)
// Rota: DELETE /api/pessoa/:id
export const deletePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Person.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(204).json({ message: 'Pessoa deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar pessoa', error: error.message });
  }
};