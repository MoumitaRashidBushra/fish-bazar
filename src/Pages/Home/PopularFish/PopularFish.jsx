import React, { useContext } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import './PopularFish.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import HomePopularFish from './HomePopularFish/HomePopularFish';
AOS.init();
const PopularFish = () => {

    const { user, updateUser, loading } = useContext(AuthContext);


    const { data: allFish = [], refetch } = useQuery({
        queryKey: ['allFish'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/popularFish')
            return res.json();
        },
    });


    return (
        <div
            className="container lg:container lg:mx-auto  lg:px-20 lg:pt-10 pb-10 mb-20 "
        >

            <div className='mt-4'>
                <h2 data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center text-base lg:text-4xl font-bold pt-4 pb-10 text-sky-950'> Our Popular Fishes</h2>
                <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center  px-6 pb-16'>Dive into a world of culinary excellence with our popular fishes. Carefully sourced for freshness and flavor, our selection boasts the finest catches, ranging from delectable local favorites to exotic treasures from the sea. Explore the oceanic wonders that have earned the hearts of our customers and make them a centerpiece of your dining experience.</p>
            </div>





            {/* <div>
                        <div className="avatar">
                            <div className="w-64 rounded-full">
                                <img src="https://img.freepik.com/free-photo/orange-white-dumbo-betta-splendens-fighting-fish_23-2148359811.jpg?w=740&t=st=1699980934~exp=1699981534~hmac=f5ee5d6024246625a177ea4844bb768a85f2883434b4d6c11d9b1911848e614c" />
                            </div>
                        </div>

                        <div className=''>
                            <h2 className="text-base lg:text-4xl text-center pb-1 pt-4  ">Shrimp</h2>
                            <p className='text-center py-1 text-base'><span className='font-bold py-2'>Seller Name: </span>Rahim</p>
                            <p className=' text-center text-base'><span className='font-bold'>Details: </span>Indulge in the exquisite taste of our premium shrimp, known for their succulent texture and sweet flavor. </p>
                            <div className="card-actions justify-center mb-10  ">
                                <a className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black border-0 border-b-4 hover:border-0 hover:border-b-4 ">More Details</a>
                            </div>
                        </div>
                    </div> */}
            {/* <div className="card w-full bg-cyan-950  shadow">

                        <figure>


                            <img src="https://www.northeasttoday.in/assets/resources/2023/09/Hilsa-to-enter-Tripura-markets.jpg" />

                        </figure>
                        <div className="px-6 text-white">
                            <div className=''>
                                <h2 className="text-base lg:text-4xl text-center pb-1 pt-4  ">Shrimp</h2>
                                <p className='text-center py-1 text-base'><span className='font-bold py-2'>Seller Name: </span>Rahim</p>
                                <p className=' text-center text-base'><span className='font-bold'>Details: </span>Indulge in the exquisite taste of our premium shrimp, known for their succulent texture and sweet flavor. </p>
                                <div className="card-actions justify-center mb-10  ">
                                    <a className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-white border-0 border-b-4 hover:border-0 hover:border-b-4 ">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div> */}


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-2 lg:px-20 px-5'>
                {
                    allFish.map(allFishes => <HomePopularFish
                        key={allFishes._id}
                        allFishes={allFishes}>

                    </HomePopularFish>)
                }
            </div>







            {/* <SwiperSlide>

                    <div className="card w-full bg-cyan-950  shadow">

                        <figure>

                            <div className="avatar">
                                <div className="w-64 rounded-full mt-6">
                                    <img src="https://img.freepik.com/premium-photo/fresh-shrimps-prawns-seafood-shelfish-with-herb-spices-chilli-pepper-lemon-lime-rosemary-raw-shrimp-plate-wooden-background-cooking-food_73523-8178.jpg?w=740" />
                                </div>
                            </div>
                        </figure>
                        <div className="px-6 text-white">
                            <div className=''>
                                <h2 className="text-base lg:text-4xl text-center pb-1 pt-4  ">Shrimp</h2>
                                <p className='text-center py-1 text-base'><span className='font-bold py-2'>Seller Name: </span>Rahim</p>
                                <p className=' text-center text-base'><span className='font-bold'>Details: </span>Indulge in the exquisite taste of our premium shrimp, known for their succulent texture and sweet flavor. </p>
                                <div className="card-actions justify-center mb-10  ">
                                    <a className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-white border-0 border-b-4 hover:border-0 hover:border-b-4 ">More Details</a>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </SwiperSlide> */}


            {/* <SwiperSlide>

                    <div class="relative group">
                        <img src="https://img.freepik.com/premium-photo/fresh-shrimps-prawns-seafood-shelfish-with-herb-spices-chilli-pepper-lemon-lime-rosemary-raw-shrimp-plate-wooden-background-cooking-food_73523-8178.jpg?w=740 " alt="Fish Image" class="w-full h-full" />

                        <div class="absolute inset-0 hover:bg-black  
                        hover:bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100 px-6  hidden text-white">
                            <div className=''>
                                <h2 className="text-base lg:text-4xl text-center pb-1 pt-4  ">Shrimp</h2>
                                <p className='text-center py-1 text-base'><span className='font-bold py-2'>Seller Name: </span>Rahim</p>
                                <p className=' text-center text-base'><span className='font-bold'>Details: </span>Indulge in the exquisite taste of our premium shrimp, known for their succulent texture and sweet flavor. </p>
                                <div className="card-actions justify-center mb-10  ">
                                    <a className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-white border-0 border-b-4 hover:border-0 hover:border-b-4 ">More Details</a>
                                </div>
                            </div>

                        </div>
                    </div>


                </SwiperSlide> */}









        </div>
    );
};

export default PopularFish;
