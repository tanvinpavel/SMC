import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../Layout/Header';
import Action from './Action/Action';
import Instructions from './Instructions/Instructions';
import Banner from '../../Shared/Banner';

const SetupEnvironment = () => {
    const [homeData, setHomeData] = useState({});
    
    useEffect(()=>{
      document.title = "SMC | Set Environment";
      
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
            <Banner type="setupEnvironment"/>
            <Instructions/>
            <Action/>
        </>
    );
};

export default SetupEnvironment;