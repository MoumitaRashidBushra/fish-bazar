import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { FaStar } from "react-icons/fa";
import { Pagination } from 'swiper/modules';



//import { Pagination } from 'swiper';



const ViewReview = () => {
    return (


        <div>
            <div className='container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-1 pb-1'>
                <h2 data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center text-base lg:text-4xl font-bold pt-4 pb-10 text-sky-950'> Dive into Delightful Fish Bazaar Reviews</h2>
                <p
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center  px-6 pb-16'>Explore what our customers are saying! Dive into a sea of satisfaction with Fish Bazaar reviews. Your culinary journey starts here – read, savor, and join the chorus of delighted customers.#FishBazaarReviews</p>
            </div>

            <div className="ReadReview container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-1 pb-1 ">


                <Swiper data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    style={{ height: '100%' }}
                >
                    <SwiperSlide>
                        <div className="card w-full bg-neutral  text-white">
                            <div className="card-body">
                                <h2 className="card-title text-center text-xl lg:text-3xl pb-4 lg:ms-12">Karim</h2>
                                <p className='lg:px-10'>At Fish Bazaar, the Hilsa Fish Eggs redefine seafood luxury. From their pristine source to the plate, each egg exudes a rich, briny essence that captivates the palate. The delicate texture and nuanced flavor make them a culinary masterpiece, perfect for both traditional and innovative recipes. Dive into a symphony of taste with these delectable eggs – a testament to Fish Bazaar's commitment to quality. "</p>
                                <div className="card-actions justify-center text-orange-400 pt-5 ms-8 text-center">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full bg-neutral  text-white">
                            <div className="card-body">
                                <h2 className="card-title text-center text-xl lg:text-3xl pb-4 lg:ms-12">Rahim</h2>
                                <p className='lg:px-10'>At Fish Bazaar, the Ilish is nothing short of a culinary masterpiece. From its silver-scaled elegance to the rich, oily texture, each bite is a journey into the heart of Bengali flavors. Whether grilled to perfection or bathed in traditional mustard-based curry, the Ilish stands as a testament to seafood excellence. A seasonal delight worth savoring, the Ilish at Fish Bazaar embodies tradition, exclusivity, and pure gastronomic joy. </p>
                                <div className="card-actions justify-center text-orange-400 pt-5 ms-8 text-center">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full bg-neutral  text-white">
                            <div className="card-body">
                                <h2 className="card-title text-center text-xl lg:text-3xl pb-4 lg:ms-12">Mina Akter</h2>
                                <p className='lg:px-10'>Fish Bazaar's shrimp is a celebration of marine delicacy. Sourced for quality and freshness, each shrimp promises a burst of ocean flavor in every bite. Whether grilled, sautéed, or added to your favorite dishes, our shrimp offers a versatile and delightful addition to your seafood indulgence. Dive into the ocean of taste with Fish Bazaar's shrimp – where quality meets culinary excellence. </p>
                                <div className="card-actions justify-center text-orange-400 pt-5 ms-8 text-center">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card w-full bg-neutral  text-white">
                            <div className="card-body">
                                <h2 className="card-title text-center text-xl lg:text-3xl pb-4 lg:ms-12">Poly Islam</h2>
                                <p className='lg:px-10'>Fish Bazaar's Koi is a true revelation in freshwater dining. The Climbing Perch's distinct taste and versatility shine in every dish. Sourced from well-tended ponds, Koi offers an affordable yet gourmet experience. Its delicate yet unique flavor makes it a favorite for both traditional and contemporary Bengali cuisine. At Fish Bazaar, Koi is not just a fish</p>
                                <div className="card-actions justify-center text-orange-400 pt-5 ms-8 text-center">
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide> */}

                </Swiper>
            </div>

        </div>
    );
};

export default ViewReview;