import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import ShowApprovedFish from './ShowApprovedFish';

const ApprovedFish = () => {

    const { data: approvedFish = [], refetch } = useQuery({
        queryKey: ['approvedFish'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/showApprovedFish');
            return res.json();
        },
    });

    return (
        <div>
            <div className='container lg:container lg:mx-auto  lg:px-10 lg:pt-5 pb-10 my-10 '>
                <div className='mt-4'>
                    <h2 data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='text-center text-base lg:text-4xl font-bold pt-4 pb-10 text-sky-950'> Our Fishes</h2>
                    <p
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        className='text-center  px-6 pb-16'>Dive into a world of culinary excellence with our popular fishes. Carefully sourced for freshness and flavor, our selection boasts the finest catches, ranging from delectable local favorites to exotic treasures from the sea. Explore the oceanic wonders that have earned the hearts of our customers and make them a centerpiece of your dining experience.</p>
                </div>


                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 pt-8 px-10  '>


                    {

                        approvedFish.map(showAppFish => <ShowApprovedFish
                            key={showAppFish._id}
                            showAppFish={showAppFish}

                        ></ShowApprovedFish>)

                    }




                </div>

            </div>
        </div>
    );
};

export default ApprovedFish;