const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Logs extends Model { };

Logs.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ip: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "Logs",
    }

);

module.exports = Logs; 