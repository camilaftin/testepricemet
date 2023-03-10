import express from 'express';
import { getProdutos, addProdutos, updateProdutos, deleteProdutos, getProdutoByID } from '../components/produto.js';

const router = express.Router();

router.get('/', getProdutos);

router.get('/produto/:id', getProdutoByID);

router.post('/', addProdutos);

router.put('/:id', updateProdutos);

router.delete('/:id', deleteProdutos);

export default router;
