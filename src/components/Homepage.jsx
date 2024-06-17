import React from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  // console.log(data);

  if(isFetching) return <Loader/>;

  const globalStats = data?.data?.stats;

  return (
    <section className="home">
      <h2>Global Crypto Stats</h2>
      <section>
        <div>
          <p>Total Cryptocurrencies</p>
          <h4>{millify(globalStats?.total)}</h4>
        </div>
        <div>
          <p>Total Coins</p>
          <h4>{millify(globalStats?.totalCoins)}</h4>
        </div>
        <div>
          <p>Total Markets</p>
          <h4>{millify(globalStats?.totalMarkets)}</h4>
        </div>
        <div>
          <p>Total Market Cap</p>
          <h4>{millify(globalStats?.totalMarketCap)}</h4>
        </div>
        <div>
          <p>Total 24h Volume</p>
          <h4>{millify(globalStats?.total24hVolume)}</h4>
        </div>
        <div>
          <p>Total Exchanges</p>
          <h4>{millify(globalStats?.totalExchanges)}</h4>
        </div>
      </section>
      <aside>
        <h2>Top 10 Cryptocurrencies in the world</h2>
        <div className="10_cryptocurrencies">
          <Cryptocurrencies simplified />
        </div>
        <Link to={"/cryptocurrencies"}>Show More</Link>
      </aside>
      <aside>
        <h2>Latest Crypto News</h2>
        <div className="10_news">
          <News simplified />
        </div>
        <Link to={"/news"}>Show More</Link>
      </aside>
    </section>
  );
};

export default Homepage;
