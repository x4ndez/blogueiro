const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");


class BlogPosts extends Model { };

BlogPosts.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
        modelName: "blogposts",
    }

);

module.exports = BlogPosts; 