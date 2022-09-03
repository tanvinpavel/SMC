import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from './Banner/Banner';
import axios from 'axios';

const ComingSoon = () => {
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
            <Banner/>
        </>
    );
};

export default ComingSoon;