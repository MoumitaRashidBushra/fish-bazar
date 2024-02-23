import React from 'react';

const SellerHero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.lightcastlebd.com/wp-content/uploads/2020/07/Catching-Fish.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Fish Bazar</h1>
                        <p className="mb-5 text-3xl ">Seller</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerHero;