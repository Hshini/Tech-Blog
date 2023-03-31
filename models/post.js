const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/connection")

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        posr: {

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)
