import React from 'react';
import { Link } from 'react-router-dom';

const About = ({aboutData}) => {
  console.log(aboutData[0]);
  return (
      <section id="about" className="about-section about-wrap style-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 order-3 order-lg-1 p-l">
              <div className="left">
                <h1
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Together We Can Build <br />
                  a Better World
                </h1>
                {
                  aboutData.length > 0 ? <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">{aboutData[0].b_text}</p> : <div className='spinner-container-height d-flex align-items-center'><div className="spinner-border text-dark" role="status"><span className="visually-hidden">Loading...</span></div></div>
                }
                <div
                  className="entry-buttons"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Link to="#" className="btn-ghost">Get Involved</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2">
              <div className="right">
                <img src="image/about/about1.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;