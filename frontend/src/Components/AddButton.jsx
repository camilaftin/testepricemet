import "./AddButton.scss";
import { useTheme } from "../contexts/useTheme";

import { Link } from "react-router-dom";

const AddButton = () => {
  const { theme } = useTheme();

  return (
    <div className="text-center mt-4">
      <Link to="/addproduto" className={`btn btn-${theme} button `}>
        Adicionar Produto
      </Link>
    </div>
  );
};

export default AddButton;