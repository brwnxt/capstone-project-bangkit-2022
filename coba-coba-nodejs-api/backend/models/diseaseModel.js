const Sequelize = require("sequelize");
const db = require("../config/database.js");

const {
    DataTypes
} = Sequelize;

const Disease = db.define('disease', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    disease_name: {
        type: DataTypes.STRING
    },
    disease_image_url: {
        type: DataTypes.STRING
    },
    medicine_advice: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

module.exports = Disease;