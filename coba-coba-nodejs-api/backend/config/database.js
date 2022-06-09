const Sequelize = require("sequelize");

const db = new Sequelize('diseasedata_db', 'root', '123', {
    host: "34.101.114.232",
    dialect: "mysql"
});

module.exports = db;