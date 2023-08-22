import express from 'express';
import { validateContactData } from '../validators/contactValidator.ts';
import { identifyContact } from '../controller/contactController.js';

const router = express.Router();

router.post('/identify', validateContactData, identifyContact);

export default router;
