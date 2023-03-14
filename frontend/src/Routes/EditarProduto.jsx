import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/useTheme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const EditarProduto = () => {

  const { id } = useParams();
  const { theme } = useTheme();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [mensagem, setMensagem] = useState("");



  useEffect(() => {
    fetch(`http://localhost:8800/produto/${id}`)
      .then((response) => response.json())
      .then((produto) => {
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setPreco(produto.preco);
      })
      .catch((error) => {
        setMensagem("Ocorreu um erro ao carregar o produto.");
      });
  }, [id]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const produto = {
      nome: nome,
      descricao: descricao,
      preco: preco,
    };

    console.log(produto);

    fetch(`http://localhost:8800/produto/update/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(produto)

    })
      .then(response => {
        if (response.ok) {
          alert("Produto alterado com sucesso!");
          window.location.href = '/';
        } else {
          setMensagem("Erro ao atualizar");
        }
      });
  };

  return (
    <div>
      <h1>Editar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={handleNomeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input type="text"
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={handleDescricaoChange}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            name="preco"
            value={preco}
            onChange={handlePrecoChange}
          />
        </div>
        <div className="text-center mt-4">
          <button className={`btn btn-${theme} button `} type="submit">Salvar</button> </div>
        {mensagem && <p style={{ color: 'red', fontWeight: 'bold' }}>{mensagem}</p>}
      </form>
    </div>
  );
};

export default EditarProduto;

