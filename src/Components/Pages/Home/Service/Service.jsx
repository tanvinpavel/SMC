import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({serviceData}) => {
    return (
        <section id="services" className="service-section service-wrap style-1">
          <div className="container">
            <h1
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              Start Building Within Minutes
            </h1>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="service-box"
                  data-sal="slide-up"
                  data-sal-delay="200"
                  data-sal-duration="800"
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
                  data-sal="slide-up"
                  data-sal-delay="300"
                  data-sal-duration="800"
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
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-duration="800"
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
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease-out-back"
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