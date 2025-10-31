const { DataTypes } = rerquire('sequelize');
const sequelize = require('../index/database');

const Abilities = sequelize.define("Abilities", {
    name_abi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Abilities;