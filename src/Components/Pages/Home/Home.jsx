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
      document.title = "SMC | Home";
      let isCancelled = false;
      (async function(){
        try {
          const {data} = await axios.get("http://localhost:3500/items");
          if(!isCancelled){
            console.log('data loaded');
            console.log(data);
            setHomeData(data);
          }
        } catch (error) {
          console.log(error);
        }
      })()

      return () => {
        console.log('cancel load data');
        isCancelled = true;
      }
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