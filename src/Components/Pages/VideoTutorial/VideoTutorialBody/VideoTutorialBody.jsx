import React from 'react';
import { Link } from 'react-router-dom';

const VideoTutorialBody = () => {
    return (
        <div class="tutorial-video">
          <div class="container">
            <div class="tutorial-video-content">

              <div class="tv-sec-top">
                
                <div class="tv-video">
                  <div class="tv-title">
                    <Link to="#" className="play cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-play"></i></Link>
                    <h2 className="heading">Create a Simple Blockchain App with SMC</h2>
                  </div>
                  <div class="tv-thumbnail">
                    <img src="image/tutorial-video/tutorial-video.png" alt="img"/>
                    <Link to="#" className="play cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-play"></i></Link>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                </div>

                {/* divider */}

                <div class="accordion video-list my-5" id="collapseXYZ">
                  <div class="accordion-item li-heading">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#xyz" aria-expanded="true" aria-controls="xyz">
                        <div class="bg-grey">
                          <div class="li-heading-text">
                            <h4>Introduction To The Course </h4>
                          </div>
                          <span class="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="xyz" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#collapseXYZ">
                      <div class="accordion-body">
                        <ul class="video-list">
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span class="tv-length">4:30</span>
                          </li>
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span class="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingM" aria-expanded="false" aria-controls="headingM">
                        <div class="bg-grey">
                          <div class="li-heading-text">
                            <h4>Part I - Setup</h4>
                          </div>
                          <span class="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingM" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div class="accordion-body">
                        <ul class="video-list">
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span class="tv-length">4:30</span>
                          </li>
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span class="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingP" aria-expanded="false" aria-controls="headingP">
                        <div class="bg-grey">
                          <div class="li-heading-text">
                            <h4>Part II - Coding 101</h4>
                          </div>
                          <span class="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingP" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div class="accordion-body">
                        <ul class="video-list">
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span class="tv-length">4:30</span>
                          </li>
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span class="tv-length">1:20</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#headingG" aria-expanded="false" aria-controls="headingG">
                        <div class="bg-grey">
                          <div class="li-heading-text">
                            <h4>Part III - Testing Your App</h4>
                          </div>
                          <span class="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>

                    <div id="headingG" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#collapseXYZ">
                      <div class="accordion-body">
                        <ul class="video-list">
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>Prerequisites</h5>
                            <span class="tv-length">4:30</span>
                          </li>
                          <li class="flex">
                            <i class="far fa-caret-circle-right"></i>
                            <h5>What To Expect At The End of The Course </h5>
                            <span class="tv-length">1:20</span>
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