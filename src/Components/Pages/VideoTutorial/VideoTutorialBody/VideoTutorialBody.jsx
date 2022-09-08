import React from 'react';
import { Link } from 'react-router-dom';

const VideoTutorialBody = () => {
    return (
        <div className="tutorial-video">
          <div className="container">
            <div className="tutorial-video-content">

              <div className="tv-sec-top">
                
                <div className="tv-video">
                  <div className="tv-title">
                    <Link to="#" className="play cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-play"></i></Link>
                    <h2 className="heading">Create a Simple Blockchain App with SMC</h2>
                  </div>
                  <div className="tv-thumbnail">
                    <img src="image/tutorial-video/tutorial-video.png" alt="img"/>
                    <Link to="#" className="play cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fas fa-play"></i></Link>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                </div>

                {/* divider */}

                <div className="accordion video-list my-5" id="collapseXYZ">
                  <div className="accordion-item li-heading">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#xyz" aria-expanded="true" aria-controls="xyz">
                        <div className="bg-grey">
                          <div className="li-heading-text">
                            <h4>Introduction To The Course </h4>
                          </div>
                          <span className="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="xyz" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#collapseXYZ">
                      <div className="accordion-body">
                        <ul className="video-list">
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span className="tv-length">4:30</span>
                          </li>
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span className="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingM" aria-expanded="false" aria-controls="headingM">
                        <div className="bg-grey">
                          <div className="li-heading-text">
                            <h4>Part I - Setup</h4>
                          </div>
                          <span className="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingM" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div className="accordion-body">
                        <ul className="video-list">
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span className="tv-length">4:30</span>
                          </li>
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span className="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingP" aria-expanded="false" aria-controls="headingP">
                        <div className="bg-grey">
                          <div className="li-heading-text">
                            <h4>Part II - Coding 101</h4>
                          </div>
                          <span className="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingP" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div className="accordion-body">
                        <ul className="video-list">
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span className="tv-length">4:30</span>
                          </li>
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span className="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingG" aria-expanded="false" aria-controls="headingG">
                        <div className="bg-grey">
                          <div className="li-heading-text">
                            <h4>Part III - Testing Your App</h4>
                          </div>
                          <span className="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingG" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div className="accordion-body">
                        <ul className="video-list">
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span className="tv-length">4:30</span>
                          </li>
                          <li className="flex">
                            <i className="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span className="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default VideoTutorialBody;