import { useEffect, useState } from "react";

import "./DetailCard.scss";
import { useTheme } from "../contexts/useTheme"

const DetailCard = (props) => {
  const { theme } = useTheme();

  const [produtos, setProdutos] = useState({})

  console.log(props.id);




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
  }, []);



  //console.log(dentistas.usuario.username);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detalhes do produto {produtos.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div className={`card-body row  ${theme == 'dark' ? 'cardDark' : ''}`}>
          <div className="col-sm-12 col-lg-6">

          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {produtos.nome}</li>
              <li className="list-group-item">
                Descricao: {produtos.descricao}
              </li>
              <li className="list-group-item">
                Preco: {produtos.preco}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-${theme} button `}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default DetailCard;
