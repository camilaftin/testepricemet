import "./UpdateButton.scss";
import { useTheme } from "../contexts/useTheme";

import { Link } from "react-router-dom";

const UpdateButton = () => {
  const { theme } = useTheme();

  return (
    <div className="text-center mt-4">
      <Link to="/produto/updateproduto/" className={`btn btn-${theme} button `}>
        Editar
      </Link>

    </div>

  );
};

export default UpdateButton;