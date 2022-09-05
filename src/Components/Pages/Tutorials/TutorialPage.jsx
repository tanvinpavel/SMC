import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import TutorSlider from '../../Shared/TutorSlider';
import Tutotial from './Tutorial1/Tutorial';

function TutorialPage() {
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
      <Banner type="tutorials"/>
      <TutorSlider/>
      <Tutotial/>
    </>
  )
}

export default TutorialPage;