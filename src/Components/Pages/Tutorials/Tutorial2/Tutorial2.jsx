import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Tutorial2() {
  const [tutorial1Item, setTutorial1Item] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3500/Tutorial2')
      .then((result) => result.json())
      .then((data) => {
        console.log(data)
        setTutorial1Item(data)
      });
  }, [])

  return (
    <div className="tutorial py-5">
      <div className="container">
        <div className="tutorial-content">
          <div className="tutorial-section2 mb-5">
            <h2>Essential SMC Tutorials </h2>
            {
              tutorial1Item.map((item, i) => <div className="box d-flex">
                <div className="tutorial-thumb"><Link to=""><img src={item.img} alt="img" /></Link></div>
                <div className="box-text">
                  <h3><Link to="">{item.text1}</Link></h3>
                  <p>{item.text2}</p>
                  <span>{item.text3} </span>
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half"></i>
                  </div>
                  <span>{item.text4}</span>
                  <Link to="#" className="btn-fill">{item.btn}</Link>
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