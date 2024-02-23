import React, { useContext } from 'react';
import ShowSeller from '../../../SellerPage/SellerPage/ShowSeller/ShowSeller';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PopularSeller = () => {
    const { user, updateUser, loading } = useContext(AuthContext);


    const { data: homeSellers = [], refetch } = useQuery({
        queryKey: ['homeSellers'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/homeSeller')
            return res.json();
        },
    });
    return (
        <div>
            <section className=' bg-white'>
                <div className='lg:container lg:mx-auto px-5 lg:px-20  '>
                    <div className='mt-4'>
                        <h2 data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='text-center text-base lg:text-4xl font-bold pt-4 pb-10 text-sky-950'> Our Popular Seller</h2>
                        <p
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='text-center  px-6 pb-16'>At Fish Bazaar, we take pride in our handpicked selection from the best sellers. Each item is curated for freshness, quality, and a delightful gastronomic experience. Discover excellence in every bite with our popular sellers. #FishBazaarFavorites</p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10  mb-16 lg:px-20 px-5'>



                        {
                            homeSellers.map(seller => <ShowSeller
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

export default PopularSeller;