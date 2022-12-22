import React, {useState, useEffect} from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data, isFetching } = useGetCryptosQuery(count);
  
  const [cryptos, setCryptos] = useState([]);
  console.log(cryptos);
  
  const [search, setSearch] = useState("");
  
  
  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredData);
    
  }, [data, search]);
  if (isFetching) return <Loader/>;

  return (
    
    <section className="cryptocurrencies">
      {!simplified && (
        <div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search currencies here..."
          />
        </div>
      )}

      {cryptos?.map((i) => (
        <Link className="coin_card" to={`/crypto/${i.uuid}`} key={i.name}>
          <div>
            <aside>
              {i.rank}. {i.name}
            </aside>
            <aside className="coin_img">
              <img src={i.iconUrl} alt="" />
            </aside>
          </div>
          <p>Symbol: {i.symbol}</p>
          <p> Price: {millify(i.price)}</p>
          <p>Market Cap: {millify(i.marketCap)}</p>
        </Link>
      ))}
    </section>
  );
};

export default Cryptocurrencies;
