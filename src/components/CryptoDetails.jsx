import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";
import {
  AiOutlineDollarCircle,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFundProjectionScreen,
  AiOutlineMoneyCollect,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineExclamation,
} from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import Loader from "../components/Loader";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);


  if (isFetching) return <Loader />;

  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  const cryptoDetailsLink = data?.data?.coin?.links;

  // console.log(cryptoDetailsLink);


  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <AiOutlineDollarCircle />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <BiHash /> },
    {
      title: "Change",
      value: ` ${cryptoDetails?.change} %`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <AiOutlineDollarCircle />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];
  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <AiOutlineCheck />
      ) : (
        <AiOutlineClose />
      ),
      icon: <AiOutlineExclamation />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamation />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamation />,
    },
  ];

  return (
    <div className="crypto_details">

      <div>
        <h2>
          {cryptoDetails.name} <img src={cryptoDetails.iconUrl} alt="" />
        </h2>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statics,
          market cap and supply
        </p>
      </div>
      

      <div>
        <section>
          <h3>{cryptoDetails.name} value statistics</h3>
          <p>An overview showing the stats of Bitcoin.</p>
          {
            stats.map(({title, value, icon})=>(
              <main key={title}>
              <p>{icon}</p>
              <p>{title} :</p>
              <p>{value}</p>
              </main>

            ))
          }

        </section>
        <aside>
        <h3>Other Statistics</h3>
          <p>An overview showing the stats of all cryptocurrencies.</p>
          {
            genericStats.map(({title, value, icon})=>(
              <main key={title}>
              <p>{icon}</p>
              <p>{title} :</p>
              <p>{value}</p>
              </main>

            ))
          }
        </aside>
      </div>
      <div>
        <section>
        <h2>What is {cryptoDetails.name} ?</h2>
          {HTMLReactParser(cryptoDetails.description)}
        </section>
        <aside>
          <h2>Bitcoin Links</h2>
          <main>
          {
            cryptoDetailsLink.map((i)=>(
              <div key={i.url}>
                <p>{i.type}</p>
                <a href={i.url}>{i.url}</a>
              </div>
            ))
          }
          </main>
          
        </aside>
      </div>
    </div>
  );
};

export default CryptoDetails;
