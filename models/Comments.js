const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class Comments extends Model { };

Comments.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: "comments",
    }

);

module.exports = Comments; 