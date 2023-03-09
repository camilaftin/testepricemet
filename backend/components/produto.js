import { server } from '../server.js';

export const getProdutos = (_, response) => {
    const qu = 'SELECT * FROM produtos';

    server.query(qu, (error, data) => {
        if (error) {
            return response.json(error);
        }
        return response.status(200).json(data);
    })
};

export const addProdutos = (request, response) => {
    const qu = "INSERT INTO produtos (`nome`,`descricao`, `preco`) VALUES (?) ";

    const values = [
        request.body.nome,
        request.body.descricao,
        request.body.preco
    ];

    server.query(qu, [values], (err) => {
        if (error) {
            return response.json(error);
        }
        return response.status(200).json("Produto cadastrado com sucesso");
    });
};


export const updateProdutos = (request, response) => {
    const qu = "UPDATE produtos SET `nome` = ?,`descricao` = ?, `preco` = ? WHERE `ID` = ? ";

    const values = [
        request.body.nome,
        request.body.descricao,
        request.body.preco
    ];

    server.query(qu, [...values, request.params.id], (err) => {
        if (error) {
            return response.json(error);
        }
        return response.status(200).json("Produto alterado com sucesso");
    });
};

export const deleteProdutos = (request, response) => {
    const qu = "DELETE FROM produtos WHERE `ID` = ? ";

    server.query(qu, [request.params.id], (err) => {
        if (error) {
            return response.json(error);
        }
        if (response.affectedRows === 0) {
            return response.status(404).json("Produto nao encontrado");
        }
        return response.status(200).json(`Produto ${id} excluido com sucesso`);
    });
};