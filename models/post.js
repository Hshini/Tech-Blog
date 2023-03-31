const { Model, DataTypes } = require('sequelize')
const sequelize = require("../config/connection")

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_posted: {
            type: DataTypes.DATE,
            allowNull: false,

        },
        content: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        title: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        author_id:{
            model:user,
            
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)
