import db from '../models/index.js';

const Ability = db.Abilities;


// 1. CREATE (Criar uma Habilidade)
// Rota: POST /api/habilidade
export const createHabilidade = async (req, res) => {
  try {
    const novaHabilidade = await Ability.create(req.body);
    res.status(201).json(novaHabilidade);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar habilidade', error: error.message });
  }
};

// 2. GET (Buscar todas as Habilidades)
// Rota: GET /api/habilidade
export const getAllHabilidades = async (req, res) => {
  try {
    const habilidades = await Ability.findAll();
    res.status(200).json(habilidades);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar habilidades', error: error.message });
  }
};

// 3. GET (Buscar Habilidade por ID)
// Rota: GET /api/habilidade/:id
export const getHabilidadeById = async (req, res) => {
  try {
    const { id } = req.params;
    const habilidade = await Ability.findByPk(id);

    if (!habilidade) {
      return res.status(4404).json({ message: 'Habilidade não encontrada' });
    }
    res.status(200).json(habilidade);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar habilidade', error: error.message });
  }
};

// 4. UPDATE (Atualizar uma Habilidade)
// Rota: PUT /api/habilidade/:id
export const updateHabilidade = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Ability.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedHabilidade = await Ability.findByPk(id);
      res.status(200).json(updatedHabilidade);
    } else {
      res.status(404).json({ message: 'Habilidade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar habilidade', error: error.message });
  }
};

// 5. DELETE (Deletar uma Habilidade)
// Rota: DELETE /api/habilidade/:id
export const deleteHabilidade = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ability.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(204).json({ message: 'Habilidade deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Habilidade não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar habilidade', error: error.message });
  }
};