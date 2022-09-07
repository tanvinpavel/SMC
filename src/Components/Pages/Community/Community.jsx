<<<<<<< HEAD
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import Banner from '../../Shared/Banner';
import OnlineCommunity from './OnlineCommunity/OnlineCommunity';

const SmcCommunity = () => {
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
            <Banner type="SmcCommunity"/>
            <OnlineCommunity/>
        </>
    );
};

export default SmcCommunity;
=======
import React from "react"
import { Link } from "react-router-dom"


function Community() {
  return (
    <>
        <div className="container my-5">
            <h2 className="community-title">Online Communities </h2>
            <p className='community-sub-title'>SMC is taking the world and the collective blockchain community by storm. Get to the heart of the discussion by browsing the list of the most important conversations and sources of information. We recommend you follow all these forums, threads, and accounts. </p>
            <div className='row community my-5'>

                <div className='community-container tv-sec-top mb-5 pb-2'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h4 className='m-0'>Forums</h4>
                    <button className='see-all-btn'>See All</button>
                </div>
                <ul>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-reddit"><Link to="#"className='user'>r/smcblockchn</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-reddit"><Link to="#"className='user'>r/smcblockchn</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-reddit"><Link to="#"className='user'>r/smcblockchn</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-reddit"><Link to="#"className='user'>r/smcblockchn</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>

                  
                </ul>
            </div>

            <div className='community-container tv-sec-top mb-5 pb-2'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h4 className='m-0'>Chat Rooms </h4>
                    <button className='see-all-btn'>See All</button>
                </div>
                <ul>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fas fa-comment-minus"><Link to="#"className='user'>SMC Code Army</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fas fa-comment-minus"><Link to="#"className='user'>SMC Code Army</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fas fa-comment-minus"><Link to="#"className='user'>SMC Code Army</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fas fa-comment-minus"><Link to="#"className='user'>SMC Code Army</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC Development | 2,006,959 Views | 52,032 Active Members </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                  
                </ul>
            </div>

            <div className='community-container-twitter tv-sec-top mb-5 pb-2'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h4 className='m-0'>Twitter </h4>
                    <button className='see-all-btn'>See All</button>
                </div>
                <ul>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-twitter text-primary"><Link to="#"className='user'>@smctoptips</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC App Development </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-twitter text-primary"><Link to="#"className='user'>@smctoptips</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC App Development </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    
                  
                </ul>
            </div>
                
            <div className='community-container-twitter tv-sec-top mb-5 pb-2'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <h4 className='m-0'>Chat Rooms </h4>
                    <button className='see-all-btn'>See All</button>
                </div>
                <ul>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-youtube text-danger"><Link to="#"className='user'>@smctoptips</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC App Development </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-youtube text-danger"><Link to="#"className='user'>@smctoptips</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC App Development </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                    <li className='community-user-post d-flex '>
                        <div className='user-post d-flex'>
                            <div className='user-name'>
                                <span><i class="fab fa-youtube text-danger"><Link to="#"className='user'>@smctoptips</Link></i> </span>
                            </div>
                            <p>All Things Related To SMC App Development </p>
                        </div>
                        <i class="fal fa-arrow-right community-right-arrow"></i>
                    </li>
                  
                </ul>
            </div>

            </div>

            
        </div>
    </>
  )
}

export default Community
>>>>>>> 20ae99a (Add style)
