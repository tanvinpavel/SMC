import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function InteractiveTutorial() {
    const [card3Data, setCard3Data] = useState([]);
    console.log(card3Data)

    useEffect(() => {
        fetch("http://localhost:3500/LeronByCard3")
        .then((result) => result.json())
        .then((data) =>
        setCard3Data(data)
        )
    },[])
  return (
    <div className="container">
    <div className="cards">
     <div className="tutorial-card-title">
         <h2>Interactive Tutorials </h2>
          <p>Learn while you play games. Our interactive game-based tutorials<br/> teach you the basics of SMC while you play games. </p>
     </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-lg-4 g-4">
          {
              card3Data.map((card3Item) =>
                  
              <div className="col">
                  <div className="card ">
                      <div className="tutorial-thumb"><Link to="#"><img card-img-top src={card3Item.img}alt="img"/></Link>
                          <h1 className='tutorial-thumb-text'>{card3Item.title2}</h1>
                      </div>
                      <div className="card-body">
                          <div className="box-text">
                              <h4><Link to="#">{card3Item.text1}</Link></h4>
                              <span className="box-text-p">{card3Item.text2}</span>
                          </div>
                      </div>
                      <div>
                          <Link to="#" className="btn-fill card-btn">{card3Item.btn}</Link>
                      </div>
                  </div>

              </div>
                  )
              }

          
          
          
  </div>
    </div>
  </div>
  )
}

export default InteractiveTutorial