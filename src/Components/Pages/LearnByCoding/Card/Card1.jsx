import React, { useEffect, useState } from 'react';
function Card1() {

    const [cardData, setCardData] = useState([]);
    console.log(cardData)

    useEffect(() => {
        fetch("http://localhost:3500/LeronByCard1")
        .then((result) => result.json())
        .then((data) =>
        setCardData(data)
        )
    },[])
    const [card2Data, setCard2Data] = useState([]);
    console.log(card2Data)

    useEffect(() => {
        fetch("http://localhost:3500/LeronByCard2")
        .then((result) => result.json())
        .then((data) =>
        setCard2Data(data)
        )
    },[])
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
    <div>
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
                                            
                                                <div className="tutorial-thumb"><a href=""><img card-img-top src={item.img}alt="img"/></a>
                                                    <h1 className='tutorial-thumb-text'>{item.title2}</h1>
                                                </div>
                                                <div className="card-body">
                                                    <div className="box-text">
                                                        <h4><a href="">{item.text1} </a></h4>
                                                        <span className="box-text-p">{item.text2} </span>
                                                    </div>
                                                </div>
                                                <div>
                                                <a href="#" className="btn-fill card-btn">{item.btn}</a>
                                                </div>
                                        </div>
                                        
                                </div>
                                        )
                                    }
                                        

                           
                            {/* <div className="col">
                                <div className="card ">
                                    <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                        <h1 className='tutorial-thumb-text'>SMC</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="box-text">
                                            <h4><a href="">SMC Shooter Pro</a></h4>
                                            <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                        </div>
                                    </div>
                                    <div>
                                    <a href="#" className="btn-fill card-btn">Play Game</a>
                                    </div>
                                    </div>

                                </div>

                            <div className="col">
                                <div className="card ">
                                    <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                        <h1 className='tutorial-thumb-text'>SMC</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="box-text">
                                            <h4><a href="">SMC Shooter Pro</a></h4>
                                            <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                        </div>
                                    </div>
                                    <div>
                                    <a href="#" className="btn-fill card-btn">Play Game</a>
                                    </div>
                                    </div>

                                </div>
                                
                                <div className="col">
                                <div className="card ">
                                    <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                        <h1 className='tutorial-thumb-text'>SMC</h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="box-text">
                                            <h4><a href="">SMC Shooter Pro</a></h4>
                                            <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                        </div>
                                    </div>
                                    <div>
                                    <a href="#" className="btn-fill card-btn">Play Game</a>
                                    </div>
                                    </div>

                                </div> */}
                        
                            
                    </div>
                </div>
                
            
        </div>

       

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
                                        <div className="tutorial-thumb"><a href=""><img card-img-top src={card2Item.img}alt="img"/></a>
                                            <h1 className='tutorial-thumb-text'>{card2Item.title2}</h1>
                                        </div>
                                        <div className="card-body">
                                            <div className="box-text">
                                                <h4><a href="">{card2Item.text1}</a></h4>
                                                <span className="box-text-p">{card2Item.text2}</span>
                                            </div>
                                        </div>
                                        <div>
                                        <a href="#" className="btn-fill card-btn">{card2Item.btn}</a>
                                        </div>
                                     </div>

                            </div>
                            )
                        }

                    {/* <div className="col">
                          <div className="card ">
                            <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                <h1 className='tutorial-thumb-text'>SMC</h1>
                            </div>
                             <div className="card-body">
                                <div className="box-text">
                                    <h4><a href="">SMC Shooter Pro</a></h4>
                                    <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                </div>
                             </div>
                             <div>
                              <a href="#" className="btn-fill card-btn">Play Game</a>
                             </div>
                            </div>

                        </div>

                      <div className="col">
                          <div className="card ">
                            <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                <h1 className='tutorial-thumb-text'>SMC</h1>
                            </div>
                             <div className="card-body">
                                <div className="box-text">
                                    <h4><a href="">SMC Shooter Pro</a></h4>
                                    <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                </div>
                             </div>
                             <div>
                              <a href="#" className="btn-fill card-btn">Play Game</a>
                             </div>
                            </div>

                        </div>
                        
                        <div className="col">
                          <div className="card ">
                            <div className="tutorial-thumb"><a href=""><img card-img-top src="image/card/card img 1.png" alt="img"/></a>
                                <h1 className='tutorial-thumb-text'>SMC</h1>
                            </div>
                             <div className="card-body">
                                <div className="box-text">
                                    <h4><a href="">SMC Shooter Pro</a></h4>
                                    <span className="box-text-p">Learn the basics of SMC while<br/> shooting Zombies, Ghosts, and<br/> other Undead Creatures </span>
                                </div>
                             </div>
                             <div>
                              <a href="#" className="btn-fill card-btn">Play Game</a>
                             </div>
                            </div>

                        </div> */}
                   
                    
            </div>
          </div>
        </div>


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
                            <div className="tutorial-thumb"><a href=""><img card-img-top src={card3Item.img}alt="img"/></a>
                                <h1 className='tutorial-thumb-text'>{card3Item.title2}</h1>
                            </div>
                            <div className="card-body">
                                <div className="box-text">
                                    <h4><a href="">{card3Item.text1}</a></h4>
                                    <span className="box-text-p">{card3Item.text2}</span>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="btn-fill card-btn">{card3Item.btn}</a>
                            </div>
                        </div>

                    </div>
                        )
                    }

                
                
                
        </div>
          </div>
        </div>
       
    </div>
  )
}

export default Card1