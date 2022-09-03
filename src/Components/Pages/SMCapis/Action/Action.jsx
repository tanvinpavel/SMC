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
        <section class="SetupEnvironment my-5">
            <div class="container">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    
                        {
                            action.map(item => <div key={item.id} class="col">
                                <div class="card action-card h-100">
                                    <img src="./image/API'S/card-logo.png" class="" alt="..."/>
                                    <div class="card-body mt-4">
                                        <h5 class="card-title text-white">Create New SMC App </h5>
                                        <p class="card-text text-white mb-4">Create SMC Powered Apps With One Command. Comes With Pre-built UI Framework.</p>
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