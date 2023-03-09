import express from 'express';
import { getProdutos, addProdutos } from '../components/produto.js';

const router = express.Router();

router.get('/', getProdutos);

router.post('/', addProdutos);

export default router;
