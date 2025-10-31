import { DataTypes } from 'sequelize'; 
import sequelize from '../config/database.js';


const Abilities = sequelize.define("Abilities", {
    name_abi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
  tableName: 'abilities'
});

export default Abilities;
