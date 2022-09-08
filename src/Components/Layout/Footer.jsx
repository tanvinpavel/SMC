import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="cta-section cta-style-1">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="box-section">
                        <div className="entry-text">
                            <h1
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                            data-aos-once="true"
                            >
                            Build The Future With SMC
                            </h1>
                            <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                            data-aos-once="true"
                            >
                            Now is the best time to get into SMC. <br />
                            What can you build with the power & scale of SMC
                            Blockchain?
                            </p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="800"
                            data-aos-once="true"
                        >
                            <Link to="#" className="btn-ghost">Get Involved</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <footer className="footer-wrap style-1">
                <div
                    className="footer-top"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="false"
                >
                    <ul className="footer-menu d-flex justify-content-sm-between">
                        <li className="menu-item"><Link to="index.html">Home</Link></li>
                        <li className="menu-item"><Link to="documentation-a.html">Documentation</Link></li>
                        <li className="menu-item"><Link to="tutorial.html">Tutorials</Link></li>
                        <li className="menu-item"><Link to="coming-soon.html">Learn by Code</Link></li>
                        <li className="menu-item"><Link to="coming-soon.html">Setup SMC</Link></li>
                        <li className="menu-item"><Link to="coming-soon.html">API’s</Link></li>
                        <li className="menu-item"><Link to="coming-soon.html">Community</Link></li>
                        <li className="menu-item"><Link to="coming-soon.html">Get Involved</Link></li>
                    </ul>
                </div>
                <div
                    className="footer-bottom"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    data-aos-once="false"
                    data-aos-anchor=".footer-top"
                >
                    <div className="footer-social-wrap">
                        <Link to="#"><img src="image/fb-logo.svg" alt="facebook" /></Link>
                        <Link to="#"><img src="image/twitter-logo.svg" alt="twitter" /></Link>
                        <Link to="#"><img src="image/inst-icon.svg" alt="instagram" /></Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;