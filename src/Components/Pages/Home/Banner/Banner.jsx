import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({bannerData}) => {
  console.log(bannerData);
    return (
        <section className="banner banner-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="banner-content">
                  <div className="entry-content">
                    {
                      bannerData && bannerData.map(item => <h1
                          className="entry-title"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          data-aos-duration="800"
                          data-aos-once="true"
                          key={Math.random()}
                        >
                        {item.s_title}
                      </h1>)
                    }
                    <p
                      className="entry-subtitle"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="800"
                      data-aos-once="true"
                    >
                      Official Developer Resource Center for SMC <br />
                      Blockchain Technology
                    </p>
                    <div className="entry-buttons">
                      <Link
                        to="#"
                        className="btn-fill"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        data-aos-once="true"
                        >Get Involved</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Banner;