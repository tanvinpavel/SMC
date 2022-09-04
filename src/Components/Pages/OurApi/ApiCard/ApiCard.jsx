import React from 'react'
import { Link } from 'react-router-dom';

const apis = [
    {
        id: 1,
        img: "./image/API's/NodeJS.png"
    },
    {
        id: 2,
        img: "./image/API's/Python.png"
    },
    {
        id: 3,
        img: "./image/API's/Java.png"
    },
    {
        id: 4,
        img: "./image/API's/Go.png"
    },
    {
        id: 5,
        img: "./image/API's/Python.png"
    },
    {
        id: 6,
        img: "./image/API's/ASP.png"
    },
    {
        id: 7,
        img: "./image/API's/Scala.png"
    },
    {
        id: 8,
        img: "./image/API's/C++.png"
    },
    {
        id: 9,
        img: "./image/API's/Dart.png"
    },
    {
        id: 10,
        img: "./image/API's/Scala.png"
    },
]

function ApiCard() {
  return (
    <>
        <div className="container my-5">
            <div className="cards">
                <div className="card-title ">
                    <h2>Work with SMC API’s  </h2>
                    <p>SMC has built API’s in 10 programming languages to make it easy for anyone to quickly implement SMC in their applications and services.  </p>
                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 shadow-sm mx-1">
                    {
                        apis.map(item => <div key={item.id} class="card">
                            <div className='h-100 py-3 px-md-2'>
                                <img src={item.img} class="card-img-top api-img" alt="..."/>
                            </div>
                            <div class="px-0 px-md-2 card-body">
                                <h5 class="card-title">Node JS</h5>
                                <p class="card-text">Start Building an SMC App Using our Node JS API’s.</p>
                                <p className='api-version'>Version 1.035</p>
                                <div>
                                    <Link to="#" className="btn-api">Read The Docs</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
   
        </div>
    </>
  )
}

export default ApiCard