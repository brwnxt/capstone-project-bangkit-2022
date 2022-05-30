import {
    Sequelize
} from "sequelize";

const db = new Sequelize('diseasedata_db', 'root', '', {

    host: "localhost",
    dialect: "mysql"
});

export default db;