const express = require("express");
const multer = require("multer");

// import {
//   getAllDiseaseData,
//   getDiseaseDataById,
//   createDiseaseData,
//   updateDiseaseData,
//   deleteDiseaseData,
// } from "../controllers/Diseases.js";

const getAllDiseaseData = require("../controllers/Diseases");
const getDiseaseDataById = require("../controllers/Diseases");
const createDiseaseData = require("../controllers/Diseases");
const updateDiseaseData = require("../controllers/Diseases");
const deleteDiseaseData = require("../controllers/Diseases");


// import {
//   uploadFile
// } from '../controllers/uploadFile.js';
const uploadFile = require("../controllers/uploadFile");
const router = express.Router();

// // Menginisialisasi tempat penyimpanan
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./assets/images");
//   },
//   filename: function (req, file, cb) {
//     // Mengubah nama path ketika tersimpan di DB
//     cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
//   },
// });

// // Limitasi size image
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   // fileFilter: fileFilter,
// });

router.get("/", getAllDiseaseData.getAllDiseaseData);
router.get("/:id", getDiseaseDataById.getDiseaseDataById);
router.post("/", createDiseaseData.createDiseaseData);
router.post("/upload", uploadFile.uploadFile);
router.patch("/:id", updateDiseaseData.updateDiseaseData);
router.delete("/:id", deleteDiseaseData.deleteDiseaseData);

module.exports = router;