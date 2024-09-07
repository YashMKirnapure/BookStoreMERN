import express from 'express';
import { getBook } from '../controller/book.controller';

const router = express.Router();


router.get("/",getBook);

export default router;