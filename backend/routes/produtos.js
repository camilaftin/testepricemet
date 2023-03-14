import express from 'express';
import { getProdutos, addProdutos, updateProdutos, deleteProdutos, getProdutoByID } from '../controllers/produto.js';

const router = express.Router();

router.get('/', getProdutos);

router.get('/produto/:id', getProdutoByID);

router.post('/addproduto', addProdutos);

router.put('/produto/update/:id', updateProdutos);

router.delete('/produto/delete/:id', deleteProdutos);

export default router;
