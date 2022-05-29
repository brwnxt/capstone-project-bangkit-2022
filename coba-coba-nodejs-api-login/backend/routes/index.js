import express from 'express';
import {
    getUsers,
    Login,
    Register,
    Logout
} from '../Controllers/Users.js';
import {
    verifyToken
} from '../middleware/VerifyToken.js';
import {
    refreshToken
} from '../Controllers/RefreshToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;