import React from 'react';

const Instructions = () => {
    return (
        <div className='instructions py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5 mt-5 mt-lg-0 instructions-text order-2 order-lg-1">
                        <h4>Step by Step Instructions</h4>
                        <p>We recommend starting with a framework to speed up development, especially if you’re just starting out. Below you can find step by step information to get started with SMC.</p>
                        <ul>
                            <li>Step 1 - Download XYZ Library, Run XYZ Plugin</li>
                            <li>Step 2 - Download XYZ Library, Run XYZ Plugin</li>
                            <li>Step 3 - Download XYZ Library, Run XYZ Plugin / Step 1 - Download XYZ Library, Run XYZ Plugin</li>
                            <li>Step 4 - Download XYZ Library, Run XYZ Plugin / Step 1 - Download XYZ Library, Run XYZ Plugin</li>
                            <li>Step 5 - Download XYZ Library, Run XYZ Plugin</li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-7 order-1 order-lg-2">
                        <img src="./image/API's/instruction.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;