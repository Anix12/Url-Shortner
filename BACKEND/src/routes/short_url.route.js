import express from 'express'
import { createShortUrl, redirectFromShortUrl } from '../controllers/short_url.controller.js';
const router = express.Router();
import {authMiddleware} from '../middleware/auth.middleware.js'

router.post("/", authMiddleware, createShortUrl);
router.get("/", redirectFromShortUrl);

export default router; 