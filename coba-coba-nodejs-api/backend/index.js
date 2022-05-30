import express from "express";
import db from "./config/database.js ";
import DiseaseDataRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected');
} catch (error) {
    console.error('Connection error', error);
}

app.use(express.json());
app.use('/products', DiseaseDataRoutes);

app.listen(3000, () => console.log('Server running at port 3000'));