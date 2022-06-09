const express = require("express");
const db = require("./config/database");
const DiseaseDataRoutes = require("./routes/index");
const cors = require("cors");

const app = express();

try {
    db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('Connection error', error);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/diseases', DiseaseDataRoutes);

app.listen(3000, () => console.log('Server running at port 3000'));