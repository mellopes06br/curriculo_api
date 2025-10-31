const { DataTypes } = require('sequelize');
const sequelize = require('../index/database');

const Person = sequelize.define("Person", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    phone_nbr: {
        type: DataTypes.STRING,
        allowNull: false
    },

    linkedin_url: {
        type: DataTypes.STRING,
        allowNull: true
    },

    about: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Person;
