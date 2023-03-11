import "./Card.scss";
import { useTheme } from "../contexts/useTheme";


const Card = (props) => {
  const { theme } = useTheme();

  return (
    <>

      <div className={`card ${theme == 'dark' ? 'cardDark' : ''}`}>
        <img
          className="card-img-top"
          src="/images/fantasy.jpg"
          alt="Produto"
        />
        <div className={`card-body CardBody`}>


          <a href={`/produto/${props.id}`}>
            <h5 className={`card-title title`}>{props.nome}</h5>
          </a>
          <p className={`card-text`}>{props.descricao}</p>
          <p className={`card-text`}>R$ {props.preco}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
