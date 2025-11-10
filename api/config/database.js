import "dotenv/config"; 
import { Sequelize } from "sequelize";
import pg from 'pg';


const databaseUrl = process.env.DATABASE_URL; 

if (!databaseUrl) {
  console.error("ERRO: A variável de ambiente DATABASE_URL não está definida! 🔴");
  process.exit(1); // Encerra a aplicação se o banco não estiver configurado
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectModule: pg,
  dialectOptions: {
    
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  },
  logging: false 
});


try {
  await sequelize.authenticate();
  console.log('Conexão com o NeonDB estabelecida com sucesso! ✅');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados: 🔴', error);
}

// Exporta a instância
export default sequelize;