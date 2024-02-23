import React, { useContext } from 'react';
import ShowSeller from '../ShowSeller/ShowSeller';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const SellerPageContent = () => {
    const { user, updateUser, loading } = useContext(AuthContext);


    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/seller')
            return res.json();
        },
    });
    return (
        <div>
            <section className=' bg-white'>
                <div className='lg:container lg:mx-auto px-5 lg:px-20 lg:pt-10 pt-10 '>
                    <h2 data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="2000"
                        className='text-center text-4xl font-bold pt-8 pb-16  text-sky-950'> All Seller!!</h2>

                    <p
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='text-center  px-6 pb-16'>At Fish Bazaar, we take pride in our handpicked selection from the best sellers. Each item is curated for freshness, quality, and a delightful gastronomic experience. Discover excellence in every bite with our popular sellers. #FishBazaarFavorites</p>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>



                        {
                            sellers.map(seller => <ShowSeller
                                key={seller._id}
                                seller={seller}>

                            </ShowSeller>)
                        }







                    </div>
                </div>
            </section>
        </div>
    );
};

export default SellerPageContent;