import express from 'express';
import getProdutos from '../components/produto.js';

const router = express.Router();

router.get('/', getProdutos);

export default router;
