// import {
//     Sequelize
// } from "sequelize";
const Sequelize = require("sequelize");
// import db from "../config/database.js"
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