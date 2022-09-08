import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Documentation from './Documentation/Documentation';

const DocumentationA = () => {
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
           <Header transparent={false} headerData={homeData?.menu_item || []}/>
           <Documentation/>
        </>
    );
};

export default DocumentationA;