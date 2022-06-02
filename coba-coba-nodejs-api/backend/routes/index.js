import express from "express";
import multer from "multer";

import {
  getAllDiseaseData,
  getDiseaseDataById,
  createDiseaseData,
  updateDiseaseData,
  deleteDiseaseData,
} from "../controllers/Products.js";

const router = express.Router();

// Menginisialisasi tempat penyimpanan
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/images");
  },
  filename: function (req, file, cb) {
    // Mengubah nama path ketika tersimpan di DB
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});

// Limitasi size image
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  // fileFilter: fileFilter,
});

router.get("/", getAllDiseaseData);
router.get("/:id", getDiseaseDataById);
router.post("/", upload.single("disease_image"), createDiseaseData);
router.patch("/:id", updateDiseaseData);
router.delete("/:id", deleteDiseaseData);

export default router;
