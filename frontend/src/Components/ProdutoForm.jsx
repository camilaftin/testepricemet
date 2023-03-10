import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/useTheme"

const ProdutoForm = () => {

  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <FormContainer></FormContainer>

  );


};

export default ProdutoForm;