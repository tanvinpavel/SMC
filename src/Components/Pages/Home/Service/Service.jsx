import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({serviceData}) => {
    return (
        <section id="services" className="service-section service-wrap style-1">
          <div className="container">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Start Building Within Minutes
            </h1>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="service-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="icon"><img src="image/pen.svg" alt="pen" /></div>
                  <h3><Link to="coming-soon.html">Read Docs</Link></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[0].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </div>

              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="service-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="icon">
                    <img src="image/setting.svg" alt="pen" />
                  </div>
                  <h3><Link to="coming-soon.html">Setup SMC</Link></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[1].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"

              >
                <div className="service-box">
                  <div className="icon"><img src="image/play.svg" alt="pen" /></div>
                  <h3><Link to="coming-soon.html">See Tutorials </Link></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[2].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </div>

              <div
                className="col-xl-3 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="service-box">
                  <div className="icon"><img src="image/bulb.svg" alt="pen" /></div>
                  <h3><Link to="coming-soon.html">Get Help </Link></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[3].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Service;