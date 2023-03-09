import express from 'express';
import userRoutes from './routes/produtos.js';
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);


app.listen(8800, function(){
    console.log("Servidor na porta 8800");
} );