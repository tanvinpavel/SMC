import React from 'react'

function Wapi() {
  return (
    <>
    <section className='bg-dark px-2 py-5'>
        <div className="container dark" >
            <h2 className="w-title">Why Use an API? </h2>
            <p className='w-sub-title'>Here are 3 top reasons to use an API for your next SMC blockchain project. </p>
            <div className='waip-texts'>
                <div className='w-box'>
                    <p className='w-number'>1</p>
                    <p className='w-text mt-0'>Using API’s Reduces Complexity. Instead of dealing directly with core functions, you only interact with the API’s.</p>
                </div>
                <div className='w-box'>
                    <p className='w-number'>2</p>
                    <p className='w-text mt-0'>Provides more utility. Instead of dealing with intricacies of SMC, developers can focus on their app’s unique features. </p>
                </div>
                <div className='w-box'>
                    <p className='w-number'>3</p>
                    <p className='w-text mt-0'>Solid Documentation. Developers with very little blockchain experience can start building apps using our API’s. </p>
                </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default Wapi