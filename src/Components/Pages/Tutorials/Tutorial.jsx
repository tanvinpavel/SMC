import React from 'react'
// import Slide from '../../Shere/Slide'
import Tutorial2 from './Tutorial2'
import Tutorial3 from './Tutorial3'
function Tutotial() {
  return (
    <>
      <div class="tutorial py-5">
        <div class="container">
          <div class="tutorial-content">
            {/* <div class="tutorial-section1">
              <h2>Most Popular Tutorials </h2>
              <Slide/>
              
            </div> */}
            <Tutorial2/>
            <Tutorial3/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tutotial