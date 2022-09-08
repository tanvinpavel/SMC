import React from 'react';
import { Link } from 'react-router-dom';

const action = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    }
]

const Action = () => {
    return (
        <section className="SetupEnvironment my-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    
                        {
                            action.map(item => <div key={item.id} className="col">
                                <div className="card action-card h-100">
                                    <img src="./image/API'S/card-logo.png" className="" alt="..."/>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title text-white">Create New SMC App </h5>
                                        <p className="card-text text-white mb-4">Create SMC Powered Apps With One Command. Comes With Pre-built UI Framework.</p>
                                        <div className='w-100'>
                                            <Link className='btn-full' to="#">Launch Environment</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Action;