import React from 'react';

const arr = [
    {
        id: 1,
        title: "Find Community",
        details: "Find people who are just as interested in SMC and blockchain as you and work/collaborate together on projects"
    },
    {
        id: 2,
        title: "Earn Living",
        details: "Make money by completing gigs or competing for bounties. You can also earn by writing content or spreading awareness."
    },
    {
        id: 3,
        title: "Make a Difference",
        details: "SMC is the only infinitely scalable, secure blockchain in the world. Your contribution to SMC can in a real way change the world."
    }
]

const WhyInvolved = () => {
    return (
        <div className='container my-5 pb-5'>
            <h2 className='mb-5'>Why Should You Get Involved?</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    arr.map(item => <div key={item.key} className="col">
                        <div className="card h-100 involved-card">
                            <div className="card-body m-3">
                                <h5 className="card-title mb-4">{item.title}</h5>
                                <p className="card-text">{item.details}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyInvolved;