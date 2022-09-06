import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import HowToInvolved from './HowToInvolved/HowToInvolved';
import WhyInvolved from './WhyInvolved/WhyInvolved';

const GetInvolved  = () => {
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
            <Banner type="GetInvolved"/>
            <HowToInvolved/>
            <WhyInvolved/>
        </>
    );
};

export default GetInvolved ;