import DetailCard from "../Components/DetailCard";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams()

  return (
    <>
      <DetailCard id={id}/>
    </>
  )
}

export default Detail