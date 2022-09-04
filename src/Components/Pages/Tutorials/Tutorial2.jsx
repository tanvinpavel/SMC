import React, { useEffect, useState } from 'react'
function Tutorial2() {
    const [tutorial1Item, setTutorial1Item] = useState([])
    console.log(tutorial1Item)
       useEffect(() => {
        fetch('http://localhost:3500/Tutorial2')
        .then((result) => result.json())
        .then((data) => {
          console.log(data)
          setTutorial1Item(data)
        })
      }, [])
    
  return (
    <>
        <div class="tutorial-section2 mb-5">
              <h2>Essential SMC Tutorials </h2>
              {
              tutorial1Item.map((item, i) => <div class="box d-flex">
                <div class="tutorial-thumb"><a href=""><img src={item.img} alt="img"/></a></div>
                <div class="box-text">
                  <h3><a href="">{item.text1}</a></h3>
                  <p>{item.text2}</p>
                  <span>{item.text3} </span>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                  </div>
                  <span>{item.text4}</span>
                  <a href="#" class="btn-fill">{item.btn}</a>
                </div>
              </div>
                
                )}
              {/* <div class="box d-flex m-65">
                <div class="tutorial-thumb"><a href=""><img src="image/tutorial/tutorial-6.png" alt="img"/></a></div>
                <div class="box-text">
                  <h3><a href="">Create a Simple Blockchain App with SMC</a></h3>
                  <p>This course will teach you how to build your first SMC app step-by-step even if you don’t have any previous experience. </p>
                  <span>Arthur Marcus, Melinda Bates </span>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                  <a href="#" class="btn-fill">Watch</a>
                </div>
              </div>
              <div class="box d-flex">
                <div class="tutorial-thumb"><a href=""><img src="image/tutorial/tutorial-7.png" alt="img"/></a></div>
                <div class="box-text">
                  <h3><a href="">Create a Simple Blockchain App with SMC</a></h3>
                  <p>This course will teach you how to build your first SMC app step-by-step even if you don’t have any previous experience. </p>
                  <span>Arthur Marcus, Melinda Bates </span>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half"></i>
                  </div>
                  <span>3 hours 20 minutes • 17 Videos • Beginner & Intermediate Level</span>
                  <a href="#" class="btn-fill">Watch</a>
                </div>
              </div> */}
            </div>
    </>
  )
}

export default Tutorial2