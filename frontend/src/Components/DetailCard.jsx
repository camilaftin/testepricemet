import { useEffect, useState } from "react";

import "./DetailCard.scss";
import { useTheme } from "../contexts/useTheme"

const DetailCard = (props) => {

  const { theme } = useTheme();
  const [produtos, setProdutos] = useState({});
  const [deleteResponse, setDeleteResponse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8800/produto/${props.id}`)
      .then(
        response => {
          response.json().then(
            produtoList => {
              setProdutos({
                nome: produtoList.nome,
                descricao: produtoList.descricao,
                preco: produtoList.preco,

              })

            }
          )
        }
      )
  }, [props.id]);

  const handleDelete = () => {
    fetch(`http://localhost:8800/produto/delete/${props.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(data => {
        setDeleteResponse(data);
        window.location.href = '/';
      })
      .catch(error => {
        setDeleteResponse(error);
      });
  };



  return (

    <>
      <h1>Detalhes do produto {produtos.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div className={`card-body row  ${theme == 'dark' ? 'cardDark' : ''}`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/fantasy.jpg"
              alt="Produto"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {produtos.nome}</li>
              <li className="list-group-item">
                Descrição: {produtos.descricao}
              </li>
              <li className="list-group-item">
                Preço: {produtos.preco}
              </li>
            </ul>
            <div className="text-center">
              <button className={`btn btn-${theme} button `}><a href={`/produto/update/${props.id}`}>Editar</a></button>
              <button
                onClick={() => {
                  if (window.confirm("Tem certeza que deseja excluir este produto?")) {
                    fetch(`http://localhost:8800/produto/delete/${props.id}`, {
                      method: "DELETE",
                    })
                      .then((response) => {
                        if (response.ok) {
                          alert("Produto excluído com sucesso!");
                          window.location.href = '/';
                        } else {
                          response.json().then((error) => {
                            alert(`Erro ao excluir produto: ${error.message}`);
                          });
                        }
                      })
                      .catch((error) => {
                        alert(`Erro ao excluir produto: ${error.message}`);
                      });
                  }
                }}
                className={`btn btn-${theme} button `}
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
