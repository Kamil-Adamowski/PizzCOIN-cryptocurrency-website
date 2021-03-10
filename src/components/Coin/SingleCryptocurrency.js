import { FetchSingleCoin } from './fetchCoin/fetchSingleCoin'
import { useParams } from "react-router-dom";

const SingleCryptocurrency = () => {
  let { id } = useParams();
  const data = FetchSingleCoin(id).data
  
  console.log(data)
  return (
    <div className="mt-16">
      <p className="text-main" >{data.name}</p>
    </div>
  )
}

export default SingleCryptocurrency