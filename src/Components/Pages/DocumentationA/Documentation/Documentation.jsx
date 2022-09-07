import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from '../Article/Article';
import Sidebar from '../Sidebar/Sidebar';

const Documentation = () => {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3500/navbar")
            .then(res => res.json())
            .then(data => setMenuItem(data.menu_item || []))
    }, []);

    return (
        <section className="documentation documentation-a">
            <div className="container-fluid">
                <div className="documentation-content">
                    <div className="row g-0">
                        {/* sidebar */}
                        <div className="col-lg-2 col-md-4">
                            <div className="doc-left-sidebar">
                                <ul className="doc-main-menu doc-menu">
                                    <Sidebar/>
                                </ul>
                            </div>
                        </div>
                    
                        <div className="col-lg-8 col-md-8 d-md-block">
                            <Article/>
                        </div>

                        <div className="col-lg-2 col-md-0">
                            <div className="doc-right-sidebar">
                                <div className="options">
                                    <Link to="" className="d-flex align-items-center g-10 mb--10" id="edit-page">
                                        <i className="fab fa-github"></i>
                                        <span>Edit page</span>
                                        <i className="far fa-angle-right"></i>
                                    </Link>
                                    <h4>SMC Overview </h4>
                                    <h5>What’s on this page</h5>
                                    <ul>
                                        <li><Link to="#overview">Overview </Link></li>
                                        <li><Link to="#docs">How To Use The Docs </Link></li>
                                        <li><Link to="#intro">Intro To SMC </Link></li>
                                        <li><Link to="#foundation">Foundations </Link></li>
                                        <li><Link to="#web">Web 3.0 & Metaverse </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Documentation;