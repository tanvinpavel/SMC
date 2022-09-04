import React from 'react';
import { Link } from 'react-router-dom';
import TutorSlider from '../../../Shared/TutorSlider';

const VideoTutorialBody = () => {
    return (
        <div class="tutorial-video">
          <div class="container">
            <div class="tutorial-video-content">

              <div class="tv-sec-top">
                
                <div class="tv-video">
                  <div class="tv-title">
                    <Link to="https://www.youtube.com/watch?v=0O2aH4XLbto" class="play"><i class="fas fa-play"></i></Link>
                    <h2 className="heading">Create a Simple Blockchain App with SMC</h2>
                  </div>
                  <div class="tv-thumbnail">
                    <img src="image/tutorial-video/tutorial-video.png" alt="img"/>
                    <Link to="https://www.youtube.com/watch?v=0O2aH4XLbto" class="play"><i class="fas fa-play"></i></Link>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                </div>
                {/* start */}
                <div class="accordion video-list" id="accordionExample">
                  <div class="accordion-item li-heading">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <div class="bg-grey">
                          <div class="li-heading-text">
                            <h4>Introduction To The Course </h4>
                          </div>
                          <span class="pb-25">3 Videos • 15 Min </span>
                        </div>
                      </button>
                    </h2>
                    
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#abc" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                      </button>
                    </h2>
                    <div id="abc" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>

                {/* divider */}

                <div class="accordion video-list" id="collapseXYZ">
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

              <TutorSlider/>

            </div>
          </div>
        </div>
    );
};

export default VideoTutorialBody;