import sequelize from '../config/database.js';
import Person from './person.js';
import Experiences from './experiences.js';
import Abilities from './abilities.js';

// 1-para-N: Uma Pessoa pode ter muitas Experiencias
Person.hasMany(Experiences, {
  foreignKey: 'personId',
  as: 'experiences',
  onDelete: 'CASCADE' 
});
Experiences.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'person'
});

// 1-para-N: Uma Pessoa pode ter muitas Habilidades
Person.hasMany(Abilities, {
  foreignKey: 'personId',
  as: 'abilities',
  onDelete: 'CASCADE' 
});
Abilities.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'person'
});

// Exporta tudo junto em um objeto 'db'
const db = {
  sequelize, // A instância da conexão
  Person,
  Experiences,
  Abilities
};

export default db;