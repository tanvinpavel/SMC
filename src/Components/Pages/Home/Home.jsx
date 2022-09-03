import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import About from './About/About';
import Banner from './Banner/Banner';
import CaseStudies from './CaseStudies/CaseStudies';
import Service from './Service/Service';
import axios from 'axios';

const Home = () => {
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
            <Banner bannerData={homeData?.slider || []}/>
            <Service serviceData={homeData?.str_Section || []}/>
            <About aboutData={homeData?.inv_section || []}/>
            <CaseStudies CaseStudiesData={homeData?.categorized_data || []}/>
        </>
    );
};

export default Home;