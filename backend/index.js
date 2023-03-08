import express from 'express';
import userRoutes from './routes/produtos.js'



const app = express();


app.use(express.json());
app.use('/', userRoutes);


app.listen(3000, function(){
    console.log("Servidor na porta 3000");
} );