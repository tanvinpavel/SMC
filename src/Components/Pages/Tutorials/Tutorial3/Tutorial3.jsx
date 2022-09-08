import React, { useEffect, useState } from 'react'


function Tutorial3() {

    const [tutorial2Item, setTutorial2Item] = useState([])
    console.log(tutorial2Item)
       useEffect(() => {
        fetch('http://localhost:3500/Tutorial3')
        .then((result) => result.json())
        .then((data) => {
          console.log(data)
          setTutorial2Item(data)
        })
      }, [])
  return (
    <>
        <div className="tutorial-section3">
              <h2>Advanced SMC Tutorials </h2>

                {
                    tutorial2Item.map((item) =>
                        <div className="box d-flex">
                            <div className="tutorial-thumb"><a href=""><img src={item.img} alt="img"/></a></div>
                            <div className="box-text">
                            <h3><a href="">{item.text1}</a></h3>
                            <p>{item.text2} </p>
                            <span>{item.text3} </span>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half"></i>
                            </div>
                            <span>{item.text4}</span>
                            <a href="#" className="btn-fill">{item.btn}</a>
                            </div>
                        </div>
                    )
                }

              {/* <div className="box d-flex m-65">
                <div className="tutorial-thumb"><a href=""><img src="image/tutorial/tutorial-9.png" alt="img"/></a></div>
                <div className="box-text">
                  <h3><a href="">Create a Simple Blockchain App with SMC</a></h3>
                  <p>This course will teach you how to build your first SMC app step-by-step even if you don’t have any previous experience. </p>
                  <span>Arthur Marcus, Melinda Bates </span>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                  <a href="#" className="btn-fill">Watch</a>
                </div>
              </div>
              <div className="box d-flex">
                <div className="tutorial-thumb"><a href=""><img src="image/tutorial/tutorial-10.png" alt="img"/></a></div>
                <div className="box-text">
                  <h3><a href="">Create a Simple Blockchain App with SMC</a></h3>
                  <p>This course will teach you how to build your first SMC app step-by-step even if you don’t have any previous experience. </p>
                  <span>Arthur Marcus, Melinda Bates </span>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                  <a href="#" className="btn-fill">Watch</a>
                </div>
              </div> */}
            </div>
    </>
  )
}

export default Tutorial3