import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();

  console.log(id);





  return (
    <>
      <DetailCard id={id} />

    </>
  )
}

export default Detail