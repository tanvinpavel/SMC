import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = ({CaseStudiesData}) => {
  console.log(CaseStudiesData);
    return (
        <section className="case-studies-section case-studies-wrap style-1">
          <div className="container">
            <div className="row g-0">
              {
                CaseStudiesData.length > 0 ? CaseStudiesData.map(item => <div key={Math.random()} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="list-section"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                  >
                    <h3>{item?.category && item.category}</h3>
                    <ul>
                      {
                        item?.body?.map(item => <li key={Math.random()}>
                          <Link to={item.b_link}>
                            {item.b_anchorText}
                            <i className="fas fa-chevron-right"></i>
                          </Link>
                          <p>{item.b_text}</p>
                        </li>)
                      }
                    </ul>
                  </div>
                </div>)
                :
                <div className="spinner-border text-dark mt-4 mx-auto" role="status"><span className="visually-hidden">Loading...</span></div>
              }
            </div>
          </div>
        </section>
    );
};

export default CaseStudies;