import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8800`).then(
      response => {
        response.json().then(
          produtosList => {
            setProdutos(produtosList);
            //console.log(produtosList);

          }

        )
      }
    )
  }, []);

  produtos.map((itens) => {
    //console.log(itens)
    //console.log(itens.ID)
    /*console.log(itens.nome)
    console.log(itens.descricao)
    console.log(itens.preco)*/
  })

  return (
    <>
      <h1>Home</h1>



      <div className="card-grid container">

        {
          produtos.map(
            (itens) => (
              <Card
                id={itens.ID}
                nome={itens.nome}
                descricao={itens.descricao}
                preco={itens.preco}
              />
            )
          )
        }
      </div>
    </>
  );
};

export default Home;
