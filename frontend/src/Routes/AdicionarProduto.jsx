import React from "react";
import { useState } from "react";
import { useTheme } from "../contexts/useTheme";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const AdicionarProduto = () => {

  const { theme } = useTheme();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");



  const handleSubmit = (event) => {

    event.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, descricao, preco }),
    };

    fetch("http://localhost:8800/addproduto", request)
      .then((response) => {
        if (response.ok) {
          alert("Produto incluido com sucesso!");
        }
      })
      .then((data) => {
        console.log(data);
        setNome("");
        setDescricao("");
        setPreco("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <input type="text"
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="text"
            id="preco"
            name="preco"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
            required
          />
        </div>
        <div className="text-center mt-4">
          <button className={`btn btn-${theme} button `} type="submit">Adicionar Produto</button> </div>
      </form>
    </div>
  );
};

export default AdicionarProduto;

