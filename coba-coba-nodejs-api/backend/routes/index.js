import express from "express";
import {
    getAllDiseaseData,
    getDiseaseDataById,
    createDiseaseData,
    updateDiseaseData,
    deleteDiseaseData
} from "../controllers/Products.js";


const router = express.Router();

router.get('/', getAllDiseaseData);
router.get('/:id', getDiseaseDataById);
router.post('/', createDiseaseData);
router.patch('/:id', updateDiseaseData);
router.delete('/:id', deleteDiseaseData);

export default router;