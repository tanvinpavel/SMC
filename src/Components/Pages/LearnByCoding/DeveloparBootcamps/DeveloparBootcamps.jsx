import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function DeveloparBootcamps() {
    const [card2Data, setCard2Data] = useState([]);
    console.log(card2Data)

    useEffect(() => {
        fetch("http://localhost:3500/LeronByCard2")
        .then((result) => result.json())
        .then((data) =>
        setCard2Data(data)
        )
    },[])
  return (
    <div className="container">
        <div className="cards">
           <div className="tutorial-card-title">
               <h2>Developer Bootcamps  </h2>
                <p>Learn while you play games. Our interactive game-based tutorials teach you the basics of SMC while you play games.  </p>
           </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-col-xl-4  g-4">
                    {
                        card2Data.map((card2Item) =>
                        <div className="col">
                            <div className="card ">
                                <div className="tutorial-thumb"><Link to="#"><img card-img-top src={card2Item.img}alt="img"/></Link>
                                    <h1 className='tutorial-thumb-text'>{card2Item.title2}</h1>
                                </div>
                                <div className="card-body">
                                    <div className="box-text">
                                        <h4><Link to="#">{card2Item.text1}</Link></h4>
                                        <span className="box-text-p">{card2Item.text2}</span>
                                    </div>
                                </div>
                                <div>
                                   <Link to="#" className="btn-fill card-btn">{card2Item.btn}</Link>
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
export default DeveloparBootcamps
