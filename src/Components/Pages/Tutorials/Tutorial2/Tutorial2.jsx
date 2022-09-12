import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
     <div class="tutorial py-5">
        <div class="container">
          <div class="tutorial-content">
            <div class="tutorial-section2 mb-5">
                  <h2>Essential SMC Tutorials </h2>
                  {
                  tutorial1Item.map((item, i) => <div class="box d-flex">
                    <div class="tutorial-thumb"><Link to=""><img src={item.img} alt="img"/></Link></div>
                    <div class="box-text">
                      <h3><Link to="">{item.text1}</Link></h3>
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
                      <Link to="#" class="btn-fill">{item.btn}</Link>
                    </div>
                  </div>
                    
                    )}
                  
                </div>



            </div>
         </div>
      </div>
  )
}

export default Tutorial2