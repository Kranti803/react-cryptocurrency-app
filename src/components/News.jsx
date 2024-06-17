import React from 'react';
import Avtar from '../assets/avtar.webp';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


import Loader from './Loader';

const News = ({simplified}) => {
  const {data, isFetching} =useGetCryptoNewsQuery({newsCategory: 'Crypto', count: simplified ? 10 : 100});


  if(isFetching) return <Loader/>;

  const newsData = data?.value;

 


  return (
    <section className="news">
     {
      newsData?.map((i)=>(
        <a href={i?.url} target="_blank" className='news_card' key={i?.name}>
          <div>
            <h4>{i?.name}</h4>
            <img src={i?.image?.thumbnail?.contentUrl} alt='currencyImage' />
          </div>
          <p>{i?.description}</p>
          <aside>
            <span><img src={i?.provider[0]?.image?.thumbnail?.contentUrl || Avtar} alt="" />{i?.provider[0]?.name}</span>
            <span>{moment(i?.datePublished).startOf().fromNow()}</span>
          </aside>
        </a>
      ))
     }
    </section>
  )
}

export default News;
