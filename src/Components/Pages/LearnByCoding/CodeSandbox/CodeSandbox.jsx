import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function CodeSandbox() {

    const [cardData, setCardData] = useState([]);
    console.log(cardData)

    useEffect(() => {
        fetch("http://localhost:3500/LeronByCard1")
        .then((result) => result.json())
        .then((data) =>
        setCardData(data)
        )
    },[])
  return (
        <div className="container">
            <div className="cards">
                <div className="tutorial-card-title">
                    <h2>Code Sandboxes  </h2>
                    <p>These sandboxes create a safe space for you to experiment with code at the click of a button  </p>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  row-cols-lg-4 g-4">
                     {
                        cardData.map((item) => 
                            <div className="col">
                               <div className="card ">
                                    <div className="tutorial-thumb"><Link to="#"><img card-img-top src={item.img}alt="img"/></Link>
                                        <h1 className='tutorial-thumb-text'>{item.title2}</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="box-text">
                                            <h4><Link to="#">{item.text1} </Link></h4>
                                            <span className="box-text-p">{item.text2} </span>
                                        </div>
                                    </div>
                                    <div>
                                    <Link to="#" className="btn-fill card-btn">{item.btn}</Link>
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

export default CodeSandbox