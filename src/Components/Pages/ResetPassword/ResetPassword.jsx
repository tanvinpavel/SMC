import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import ResetPasswordForm from './ResetPasswordForm/ResetPasswordForm';

const ResetPassword = () => {
    const [homeData, setHomeData] = useState({});
    
    useEffect(()=>{
      document.title = "SMC | Tutorial Video";
      
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
            <ResetPasswordForm/>
        </>
    );
};

export default ResetPassword;