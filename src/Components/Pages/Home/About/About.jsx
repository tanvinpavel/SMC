import React from 'react';

const About = ({aboutData}) => {
  console.log(aboutData[0]);
  return (
      <section id="about" className="about-section about-wrap style-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 order-3 order-lg-1 p-l">
              <div className="left">
                <h1
                  data-sal="slide-right"
                  data-sal-delay="200"
                  data-sal-duration="800"
                >
                  Together We Can Build <br />
                  a Better World
                </h1>
                {
                  aboutData.length > 0 ? <p data-sal="slide-right" data-sal-delay="300" data-sal-duration="800">{aboutData[0].b_text}</p> : <div className='spinner-container-height d-flex align-items-center'><div className="spinner-border text-dark" role="status"><span className="visually-hidden">Loading...</span></div></div>
                }
                <div
                  className="entry-buttons"
                  data-sal="slide-right"
                  data-sal-delay="400"
                  data-sal-duration="800"
                >
                  <a href="#" className="btn-ghost">Get Involved</a>
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