import React from 'react';
// import sal from 'sal.js'
// import { motion, Variants } from "framer-motion";

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8
//     }
//   }
// };

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
                  <h3><a href="coming-soon.html">Read Docs</a></h3>
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
                  <h3><a href="coming-soon.html">Setup SMC</a></h3>
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
                  <h3><a href="coming-soon.html">See Tutorials </a></h3>
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
                  <h3><a href="coming-soon.html">Get Help </a></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[3].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </div>

              {/* <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="col-xl-3 col-lg-6 col-md-6"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="800"
                variants={cardVariants}
              >
                <div className="service-box">
                  <div className="icon"><img src="image/bulb.svg" alt="pen" /></div>
                  <h3><a href="coming-soon.html">Get Help </a></h3>
                  {
                    serviceData.length > 0 ? <p>{serviceData[3].b_text}</p> : <div className="spinner-border text-dark mt-4" role="status"><span className="visually-hidden">Loading...</span></div>
                  }
                </div>
              </motion.div> */}
            </div>
          </div>
        </section>
    );
};

export default Service;