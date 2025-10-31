import "dotenv/config"; 
import { Sequelize } from "sequelize";


const databaseUrl = process.env.DATABASE_URL; // Corrigi para .DATABASE_URL

if (!databaseUrl) {
  console.error("ERRO: A variável de ambiente DATABASE_URL não está definida! 🔴");
  process.exit(1); // Encerra a aplicação se o banco não estiver configurado
}

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  },
  logging: false // Desligue o log do SQL se ficar muito poluído, ou deixe console.log
});

// Testa a conexão (opcional, mas bom)
try {
  await sequelize.authenticate();
  console.log('Conexão com o NeonDB estabelecida com sucesso! ✅');
} catch (error) {
  console.error('Não foi possível conectar ao banco de dados: 🔴', error);
}

// Exporta a instância
export default sequelize;