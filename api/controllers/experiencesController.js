import db from '../models/index.js';

const Experience = db.Experiences;

// 1. CREATE (Criar uma Experiência)
// Rota: POST /api/experiencia
export const createExperiencia = async (req, res) => {
  try {
    const novaExperiencia = await Experience.create(req.body);
    res.status(201).json(novaExperiencia);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar experiência', error: error.message });
  }
};

// 2. GET (Buscar todas as Experiências)
// Rota: GET /api/experiencia
export const getAllExperiencias = async (req, res) => {
  try {
    const experiencias = await Experience.findAll();
    res.status(200).json(experiencias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar experiências', error: error.message });
  }
};

// 3. GET (Buscar Experiência por ID)
// Rota: GET /api/experiencia/:id
export const getExperienciaById = async (req, res) => {
  try {
    const { id } = req.params;
    const experiencia = await Experience.findByPk(id);

    if (!experiencia) {
      return res.status(404).json({ message: 'Experiência não encontrada' });
    }
    res.status(200).json(experiencia);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar experiência', error: error.message });
  }
};

// 4. UPDATE (Atualizar uma Experiência)
// Rota: PUT /api/experiencia/:id
export const updateExperiencia = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Experience.update(req.body, {
      where: { id: id }
    });

    if (updated) {
      const updatedExperiencia = await Experience.findByPk(id);
      res.status(200).json(updatedExperiencia);
    } else {
      res.status(404).json({ message: 'Experiência não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar experiência', error: error.message });
  }
};

// 5. DELETE (Deletar uma Experiência)
// Rota: DELETE /api/experiencia/:id
export const deleteExperiencia = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Experience.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(204).json({ message: 'Experiência deletada com sucesso' });
    } else {
      res.status(404).json({ message: 'Experiência não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar experiência', error: error.message });
  }
};