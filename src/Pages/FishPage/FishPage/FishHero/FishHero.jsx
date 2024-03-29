import React from 'react';

const FishHero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://as2.ftcdn.net/v2/jpg/03/38/09/15/1000_F_338091562_OGw3AKvHRCzIhDxFEpDQv58RrcbOvEM9.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Fish Bazar</h1>
                        <p className="mb-5 text-3xl">Fish</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FishHero;