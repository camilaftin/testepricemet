import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {

  

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    

    fetch(`http://localhost:8800`).then(
      response => {
        response.json().then(
          produtosList => {
            setProdutos(produtosList)
            
          }

        )
      }
    )
  }, []);



  return (
    <>
      <h1>Home</h1>
    


      <div className="card-grid container">

        {
          produtos.map(
            (itens) => (
              <Card
                key={itens.id}
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
