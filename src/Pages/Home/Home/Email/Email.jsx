import React from 'react';

import emailjs from '@emailjs/browser';


import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useEffect } from 'react';
import { useRef } from 'react';

const Email = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4v64485', 'template_60rbdg1', form.current, 'zIrUpqVOwxhWooDNV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-6 pb-6 ' id='contact'>
            <h2 data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-center text-4xl font-bold pt-1 pb-6  text-sky-950'>Connect With Us</h2>
            <p data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-center pb-6 px-20'>Stay in the loop with Fish Bazaar! Connect with us for the latest updates, exclusive offers, and a sea of culinary inspiration. Follow us on social media, subscribe to our newsletter, and embark on a flavorful journey with Fish Bazaar. #FishBazaarConnect</p>

            <div className="flex flex-col lg:flex-row justify-between  items-center gap-8 lg:gap-16 lg:px-16 ">

                <div
                    className=' pt-12 mb-24 lg:px-1 px-4'>

                    <div data-aos="flip-left">
                        <img className='w-full h-full' src="https://img.freepik.com/free-vector/emails-concept-illustration_114360-3925.jpg?w=740&t=st=1701108122~exp=1701108722~hmac=45fc5fdfd88ff6eb61b4fa912967b512258da27e520403eba9a0f3e01690bf0d" alt="" />
                        {/* <Lottie animationData={email} loop={true} /> */}
                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className=' flex gap-8 lg:gap-16 px-5 lg:px-20'>
                            <a href="#"> <FaFacebook className='text-4xl  bg-white text-sky-950'></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/moumita-rashid-bushra-5715b6279/"> <FaLinkedin className='text-4xl bg-white text-sky-950'></FaLinkedin></a>
                            <a href="#"> <FaInstagramSquare className='text-4xl bg-white text-sky-950'></FaInstagramSquare></a>
                            <a href="#"> <FaTwitterSquare className='text-4xl bg-white text-sky-950'></FaTwitterSquare></a>
                        </div>
                    </div>



                </div>


                <div className='px-10 lg:px-0'>
                    <h1 data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className="text-4xl font-bold pb-4 text-sky-950" >Let's turn your vision into reality!!! </h1>


                    <form
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        ref={form} onSubmit={sendEmail}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="user_name" placeholder='Enter your name' className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="user_email" placeholder='xyz@gmail.com' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea name="message" placeholder='Enter your message' className="textarea textarea-bordered" />
                            {/* <input type="email" name="message" className="input input-bordered" /> */}
                        </div>

                        <div className="form-control mt-6">

                            <input type="submit" value="Send" className="btn  btn-outline px-6 text-base font-bold hover:bg-sky-950 hover:border-none text-black " />
                        </div>

                    </form>



                </div>




            </div>
        </div>
    );
};

export default Email;