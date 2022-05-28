import express from "express";
import {
    getUsers,
    Register,
    login
} from "../Controllers/Users.js";
import {
    verifyToken
} from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/users', login);

export default router;