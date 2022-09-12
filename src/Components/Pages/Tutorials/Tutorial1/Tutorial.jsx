import React from 'react'
import Tutorial2 from '../Tutorial2/Tutorial2'
import Tutorial3 from '../Tutorial3/Tutorial3'
function Tutorial() {
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

export default Tutorial