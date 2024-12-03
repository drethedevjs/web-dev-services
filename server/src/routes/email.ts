import express from 'express';
import emailController from '../controllers/emailController.js';

const router = express.Router();

router.get('/', emailController.default);
router.post('/send', emailController.sendEmail);

export default router;