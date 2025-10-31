import Sequelize from "sequelize";

// Conexão com o banco de dados PostgreSQL
const sequelize = new Sequelize(process.env.DATABASE_url, {
    dialect: 'postgres',
    dialectOptions: {

        ssl: { 
            require: true,
            rejectUnauthorized: false
        },
    },
    dialectModule: require("pg"),
});

// Testa a conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o NeonDB estabelecida com sucesso! ✅');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados: 🔴', error);
  }
})();

const Person = require('./person');
const Experiences = require('./experiences');
const Abilities = require('./abilities');

// 1-para-N: Uma Pessoa pode ter muitas Experiencias
Person.hasMany(Experiences, {
  foreignKey: 'personId', 
  as: 'experiences'      
});
Experiences.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'person'
});

// 1-para-N: Uma Pessoa pode ter muitas Habilidades
Person.hasMany(Abilities, {
  foreignKey: 'personId',
  as: 'abilities'
});
Abilities.belongsTo(Person, {
  foreignKey: 'personId',
  as: 'person'
});

// Exporta a conexão e os models
const db = {
  sequelize,
  Sequelize: sequelize.Sequelize, 
  Person,
  Experiences,
  Abilities
};


export { sequelize };
module.exports = db;