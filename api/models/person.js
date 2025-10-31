import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
}, {
        tableName: 'people'

});

export default Person;
