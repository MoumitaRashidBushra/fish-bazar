import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className=' bg-sky-950  text-white '>
            <div className="container lg:container lg:mx-auto  lg:px-10 lg:pt-2 pb-3 ">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 pt-14  mb-6 px-10 '>

                    <div>
                        <div className='flex items-center gap-1 mt-3'>

                            {/* <img className='w-28 rounded ' src="https://i.ibb.co/K5RcHW0/19734726-zdxn-8utu-200403-removebg-preview.png" alt="" /> */}
                            {/* <a className="btn btn-ghost  normal-case text-xl lg:text-3xl italic font-bold  btn-xs sm:btn-sm md:btn-md lg:btn-lg  "><span className='text-3xl lg:text-6xl '>F</span>ish Bazar </a> */}
                            <Link className=' text-white text-xl lg:text-3xl italic font-bold hover:text-[#ed8311]'><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</Link>

                        </div>
                        <div>
                            <p className='pt-8 text-justify'> Unleash a world of culinary possibilities with our carefully curated selection of premium seafood. At Fish Bazaar, we take pride in delivering the freshest catches from the ocean to your doorstep.Dive into a sea of choices, from local favorites to exotic delicacies, and elevate your dining experience. Join us in celebrating the richness of the ocean, where every purchase is a journey into the vibrant and flavorful world of seafood.</p>
                        </div>
                    </div>

                    <div className='mt-6 '>
                        <h1 className=' text-lg mt-3  ms-28 '>Quick Links</h1>

                        <div className=''>
                            <hr className=' mt-1 border-white w-48 border ms-16 ' />
                        </div>
                        <div className=' '>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1 pt-7  '>
                                <div className='lg:ms-16'>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Home</Link>
                                </div>

                                <div className=''>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Fish</Link>
                                </div>

                                <div className='lg:ms-16'>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Fish Food</Link>
                                </div>

                                <div className=''>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Seller</Link>
                                </div>

                                <div className='lg:ms-16'>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Offers</Link>
                                </div>

                                <div className=''>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>FAQ</Link>
                                </div>

                                <div className=' lg:ms-16'>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Blog</Link>
                                </div>

                                <div className=''>
                                    <Link className='hover:marker  py-2  text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Privacy Policy

                                    </Link>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className='mt-6 '>
                        <h1 className=' text-lg mt-3 ms-4 text-center '>Open Hours</h1>
                        <div className=''>
                            <hr className=' mt-1 border-white w-80 border ms-6 ' />
                        </div>
                        <div className='pt-8'>
                            <div className='ms-8'>
                                <p>Immerse yourself in a world of exquisite seafood during our open hours. Join us and savor the freshest catches curated just for you. Please note, we're closed on Saturdays. Your culinary adventure awaits!"</p>
                                <p className='pt-6'>Monday- Friday . . . . . . . . . . . . . . . 8 AM - 5PM</p>
                                <p className='pt-2'>Sunday . . . . . . . . . . . . . . . . . . . . . 12 AM - 5PM</p>
                                <p className='pt-2'>Saturday . . . . . . . . . . . . . . . . . . . . . . . . . Close</p>
                            </div>

                        </div>


                    </div>

                </div>

                <div className='text-center mt-14 mb-12'>
                    <p>© 2023 Moumita Rashid Bushra UIDesign.to - All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;