import React from 'react'
import Tutorial2 from '../Tutorial2/Tutorial2'
import Tutorial3 from '../Tutorial3/Tutorial3'
// import Slide from '../../Shere/Slide'
function Tutotial() {
  return (
    <>
      <div className="tutorial py-5">
        <div className="container">
          <div className="tutorial-content">

            <Tutorial2/>
            <Tutorial3/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tutotial