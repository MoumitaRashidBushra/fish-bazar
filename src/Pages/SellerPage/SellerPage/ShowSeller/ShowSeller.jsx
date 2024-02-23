import React from 'react';

const ShowSeller = ({ seller }) => {
    const { name, email, photo } = seller;
    return (
        <div data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <div className="card w-full bg-base-100 shadow  ">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>

                    <p className='pt-2'><span className='font-semibold'>Email:</span> {email}</p>


                </div>
            </div>
        </div>
    );
};

export default ShowSeller;