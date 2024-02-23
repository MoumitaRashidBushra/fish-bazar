import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyBuyFish = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: myBuyFish = [], refetch } = useQuery({
        queryKey: ['myBuyFish', user.email], // Pass user.email as a query parameter
        queryFn: async () => {
            const res = await axiosSecure.get(`/buy/${user.email}`);
            return res.data;
        },
    });

    return (
        <div className='container lg:container lg:mx-auto lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Bought Fish Information!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Fish Image</th>
                            <th>Fish Name</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {myBuyFish.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <div className="w-24 h-24">
                                        <img src={item.image} alt="Fish Image" />
                                    </div>
                                </td>
                                <td>{item.fishName}</td>
                                <td>{item.sellerName}</td>
                                <td>{item.sellerEmail}</td>
                                <td>{item.price}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyFish;
