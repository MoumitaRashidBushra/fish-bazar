import React from 'react';

const FAQs = () => {
    return (
        <div className=' '>

            <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-8 pb-20'>

                <h2 data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center text-4xl font-bold pt-1 pb-6 text-sky-950'>"
                    FAQs - Fish Bazaar Odyssey</h2>
                <p data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='text-center pb-6 px-20 pt-6'>Dive into the heart of Fish Bazaar with our FAQs, your go-to resource for navigating our aquatic marketplace. From understanding our sourcing practices to unraveling the secrets of perfect seafood preparation, these concise answers are your key to a seamless and flavorful journey. Whether you're a seafood connoisseur or a curious beginner, Fish Bazaar FAQs are designed to make your experience a delightful and informed one. </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-4 '>



                    <div data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="collapse collapse-plus bg-white border text-white mt-2">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium text-cyan-950">
                                Where does Fish Bazaar source its seafood?
                            </div>
                            <div className="collapse-content text-cyan-950">
                                <p> Fish Bazaar sources its seafood from reputable local suppliers and fisheries, ensuring freshness and quality in every catch.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border text-white mt-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium text-cyan-950">
                                What payment methods are accepted on Fish Bazaar?
                            </div>
                            <div className="collapse-content text-cyan-950">
                                <p> We accept a variety of payment methods, including credit/debit cards, online banking, and other secure payment gateways.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border text-white mt-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium text-cyan-950">
                                What is the freshness guarantee at Fish Bazaar?
                            </div>
                            <div className="collapse-content text-cyan-950">
                                <p>We guarantee the freshness of our seafood. If you're not satisfied with your purchase, contact us within 24 hours of delivery, and we'll make it right.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border text-white mt-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium text-cyan-950">
                                Are there any discounts or scholarships available for the summer camp program?
                            </div>
                            <div className="collapse-content text-cyan-950">
                                <p>We offer discounts for early registrations and siblings. Additionally, we have a scholarship program to make our summer camp classes accessible to a wider range of families. Please inquire about scholarship opportunities when registering.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border text-white mt-2">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium text-cyan-950">
                                Are there any discounts or loyalty programs available at Fish Bazaar?
                            </div>
                            <div className="collapse-content text-cyan-950">
                                <p>Yes, Fish Bazaar offers periodic promotions, discounts, and a loyalty program. Keep an eye on our website and subscribe to our newsletter for the latest updates on special offers.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="https://img.freepik.com/free-vector/web-help-support-template-with-question-marks_1017-23984.jpg?w=740&t=st=1701111134~exp=1701111734~hmac=a75c69f487bd0a510c9ea29f69ffca0be56f0119ff3bd39cce6cb051c213f160" alt="" />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default FAQs;