import express from 'express';
import emailController from '../controllers/emailController.js';

const router = express.Router();

router.get('/', emailController.default);
router.post('/send-crsa', emailController.sendEmail);
router.post('/send-covenant', emailController.sendCovenantEmail);

export default router;