import {
    Sequelize
} from "sequelize";

const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './keys.json')

const {
    Storage
} = Cloud
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: 'gleaming-realm-351216',
})

module.exports = storage

// const db = new Sequelize('diseasedata_db', 'root', '', {

//     host: "localhost",
//     dialect: "mysql"
// });
const db = new Sequelize('diseasedata_db', 'root', '123', {
    host: "34.101.114.232",
    dialect: "mysql"
});

export default db;