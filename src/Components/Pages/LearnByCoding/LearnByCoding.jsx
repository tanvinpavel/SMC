import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import CodeSandbox from './CodeSandbox/CodeSandbox';
import DeveloparBootcamps from './DeveloparBootcamps/DeveloparBootcamps';
import InteractiveTutorial from './InteractiveTutorial/InteractiveTutorial';

function LearnByCoding() {
  const [homeData, setHomeData] = useState({});
    
  useEffect(()=>{
    document.title = "SMC | Learn By Coding";
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
      <CodeSandbox/>
      <DeveloparBootcamps/>
      <InteractiveTutorial/>
    </>
  )
}

export default LearnByCoding