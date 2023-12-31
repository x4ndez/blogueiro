const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Users extends Model { };

Users.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "users",
    }

);

module.exports = Users; 