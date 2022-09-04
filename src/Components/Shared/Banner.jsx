import React, { useRef } from 'react';

const banner = {
    tutorials: {
        id: 1,
        title: "SMC Tutorials",
        subTitle: "Video Tutorials Produced or Curated by Us To Make It Easy To Learn SMC ",
        img: "banner2.jpg",
    },
    learnByCoding: {
        id: 2,
        title: "Learn by Coding",
        subTitle: "Learn Faster with Coding Exercises, Instructor Led Courses, and Interactive Game-Like Tutorials  ",
        img: "banner3.png",
    },
    setupEnvironment: {
        id: 3,
        title: "Setup Environment ",
        subTitle: "Guidelines To Getting Started With SMC",
        img: "banner4.png",
    },
    SMCApis: {
        id: 4,
        title: "SMC API’s",
        subTitle: "We have Tons of Useful API’s To Help You Build With SMC",
        img: "banner5.png",
    },
    SMCCommunity: {
        id: 5,
        title: "SMC Community ",
        subTitle: "Join The Latest SMC Discussions on Forums, Chat Rooms, and Social Media",
        img: "banner6.png",
    },
    GetInvolved: {
        id: 5,
        title: "Get Involved",
        subTitle: "Whether You Are a Programmer or Possess a Non-technical Skillset, You Can Contribute To SMC ",
        img: "banner7.png",
    }
}

const Banner = ({type}) => {
    const imgPath = useRef(`./image/banner/${banner[type].img}`);
    return (
        <section class="banner banner-common" style={{"background-image": `url(${imgPath.current})`}}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="banner-content">
                            <div class="entry-content">
                                <h1 class="entry-title" data-sal="slide-up" data-sal-delay="200" data-sal-duration="800">{banner[type].title}</h1>
                                <p class="entry-subtitle" data-sal="slide-up" data-sal-delay="200" data-sal-duration="800">{banner[type].subTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;