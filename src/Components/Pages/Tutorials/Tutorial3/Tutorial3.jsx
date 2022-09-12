import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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
    <div class="tutorial py-5">
        <div class="container">
          <div class="tutorial-content">

            
            <h2>Advanced SMC Tutorials </h2>
          {
              tutorial2Item.map((item) =>
                  <div class="box d-flex">
                      <div class="tutorial-thumb"><Link to=""><img src={item.img} alt="img"/></Link></div>
                      <div class="box-text">
                      <h3><Link to="">{item.text1}</Link></h3>
                      <p>{item.text2} </p>
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
              )
          }
            </div>
          </div>

       </div>
  )
}

export default Tutorial3