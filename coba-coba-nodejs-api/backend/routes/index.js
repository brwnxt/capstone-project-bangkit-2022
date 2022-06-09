const express = require("express");
const multer = require("multer");


const getAllDiseaseData = require("../controllers/Diseases");
const getDiseaseDataById = require("../controllers/Diseases");
const createDiseaseData = require("../controllers/Diseases");
const updateDiseaseData = require("../controllers/Diseases");
const deleteDiseaseData = require("../controllers/Diseases");


const uploadFile = require("../controllers/uploadFile");
const router = express.Router();


router.get("/", getAllDiseaseData.getAllDiseaseData);
router.get("/:id", getDiseaseDataById.getDiseaseDataById);
router.post("/", createDiseaseData.createDiseaseData);
router.post("/uploads", uploadFile.uploadFile);
router.patch("/:id", updateDiseaseData.updateDiseaseData);
router.delete("/:id", deleteDiseaseData.deleteDiseaseData);

module.exports = router;