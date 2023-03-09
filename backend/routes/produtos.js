import express from 'express';
import { getProdutos, addProdutos, updateProdutos, deleteProdutos } from '../components/produto.js';

const router = express.Router();

router.get('/', getProdutos);

router.post('/', addProdutos);

router.put('/:id', updateProdutos);

router.delete('/:id', deleteProdutos);

export default router;
