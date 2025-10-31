const { DataTypes } = require('sequelize');
const sequelize = require('../index/database');

const Experiences = sequelize.define("Experience", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    end_date: {
        type: DataTypes.DATE,
        allowNull: true
    }, 

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Experiences;