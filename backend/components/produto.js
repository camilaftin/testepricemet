import { server } from '../server.js';

 const getProdutos = (_, response) => {
    const qu = 'SELECT * FROM produtos';

    server.query(qu, (error, data)=>{
        if(error){
            return response.json(error);
        }
        return response.status(200).json(data);
    })
};

export default getProdutos;