import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import './PopularFish.css'
import { Link } from 'react-router-dom';



const HomePopularFish = ({ allFishes }) => {

    const { fishName, sellerName, price, email, photo, image, details, availableFish, _id } = allFishes;

    const [backgroundImage, setBackgroundImage] = useState(image);

    return (
        <div>

            {/* <div className="hero min-h-screen relative group" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
               
            </div> */}

            <div className="card w-full bg-base-100 shadow-xl ">
                <figure><img className='w-full h-52' src={image} alt="fish" /></figure>
                <div className="card-body">
                    <div class="">
                        <div className=''>
                            <h2 className="text-base lg:text-2xl text-center pb-1  ">{fishName}</h2>
                            <p className=' py-1 text-base'><span className='font-bold py-2'>Seller Name: </span>{sellerName}</p>
                            <p className=' py-1 text-base'><span className='font-bold py-2'>Price </span>{price} Taka</p>


                            <p className='  text-base'><span className='font-bold'>Available fish: </span>{availableFish}kg</p>
                            <div className="card-actions justify-start mb-4 mt-4 ">
                                <Link to={`/viewFishDetails/${_id}`} className="btn btn-outline px-6 text-base font-bold hover:bg-sky-950 hover:border-none text-black  ">More Details</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div className='mb-10'>

            </div>



        </div>
    );
};

export default HomePopularFish;