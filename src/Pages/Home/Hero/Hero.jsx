import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Hero = () => {
    return (
        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center " style={{ backgroundImage: 'url(https://www.iied.org/sites/default/files/images/2015/06/29/hilsa%20fish_landing%20site_0.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">Discover the Freshest Catch of the Day.</h1>
                                <p className="mb-5">Welcome to our fish bazaar, where you can explore the ocean's bounty right from the comfort of your home. We pride ourselves on offering the freshest seafood, sourced directly from the sea, ensuring you savor every bite.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/fresh-shrimps-prawns-boiling-king-prawn-blue-leg-shrimp-sale-market_44868-469.jpg?w=740)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">Experience the Taste of the Ocean.</h1>
                                <p className="mb-5">At our fish market, we're passionate about delivering the authentic flavors of the sea to your kitchen. Dive into our wide selection of ocean-fresh fish and experience the true essence of seafood cuisine.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/fishing-equipment-collection-hooks-reels-bait-more-generated-by-ai_188544-14544.jpg?w=826)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">Your Trusted Source for Quality Seafood.</h1>
                                <p className="mb-5">When you shop with us, you're choosing a reliable partner in your culinary adventures. We're committed to providing the highest quality seafood, so you can cook with confidence and savor every mouthful.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/small-fish-fingerlings-hands-worker-fish-farm_491130-2476.jpg?w=740)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">From the Ocean to Your Table.</h1>
                                <p className="mb-5">We bridge the gap between the vast ocean and your dining table. Our mission is to bring the freshness and goodness of the sea straight to your home, ensuring you enjoy delectable, home-cooked seafood meals.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/fresh-raw-crucian-wooden-with-herbs_2829-11279.jpg?w=740&t=st=1698498660~exp=1698499260~hmac=9388f5735d3cf6d2c5740b65954f42d72963866828abbae8f519bb64b242457f)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">Discover the Freshest Catch of the Day.</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url( https://img.freepik.com/premium-photo/small-fish-fingerlings-fishing-net-fish-farm_491130-2466.jpg?w=740)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg text-white">
                                <h1 className="mb-5 text-5xl font-bold">Satisfying Your Seafood Cravings.</h1>
                                <p className="mb-5">Our fish bazaar is dedicated to satisfying your seafood cravings with a diverse selection of the finest catches. Whether you're a seasoned seafood chef or a novice cook, our offerings are sure to inspire your culinary adventures and leave your taste buds wanting more. Explore our range of oceanic treasures and indulge in the flavors of the sea right at home.</p>
                                <button className="btn btn-outline  hover:bg-[#ed8311] hover:border-none text-white btn-lg">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Hero;