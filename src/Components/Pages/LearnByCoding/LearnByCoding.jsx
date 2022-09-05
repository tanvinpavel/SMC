import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import Card1 from './Card/Card1';

function LearnByCoding() {
  const [homeData, setHomeData] = useState({});
    
  useEffect(()=>{
    (async function(){
      try {
        const {data} = await axios.get("http://localhost:3500/items");
        
        setHomeData(data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  return (
    <>
      <Header headerData={homeData?.menu_item || []}/>
      <Banner type="learnByCoding"/>
      <Card1/>
    </>
  )
}

export default LearnByCoding