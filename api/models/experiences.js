import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
}, {
    tableName: 'experiences'
});

export default Experiences;