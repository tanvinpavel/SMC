import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const TutorSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    return (
        <div className="tutorial-slider my-5">
            <div className="container">            
                <h2>Related Tutorials</h2>
                <div className="slick-slider my-4">
                    <Slider {...settings}>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-1.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-2.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-3.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-4.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-1.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>

                        <div className="slider">
                            <div className="box">
                                <Link to="#"><img src="image/tutorial/tutorial-2.png" alt="img"/></Link>
                                <div className="box-text">
                                    <Link to="#">
                                        <h4>Create a Simple Blockchain App with SMC</h4>
                                    </Link>
                                    <span>3 hours 20 minutes • 17 <br/>Videos • Beginner & <br/>Intermediate Level</span>
                                </div>
                                <Link to="#" className="btn-fill">Watch</Link>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TutorSlider;