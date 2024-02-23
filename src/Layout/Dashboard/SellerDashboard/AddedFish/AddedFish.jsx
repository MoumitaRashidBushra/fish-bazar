import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const AddedFish = () => {


    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // const { data: myClass = [], refetch } = useQuery(['myClass'], async () => {

    //     const res = await axiosSecure.get(`/fishUpdateInfo/${user.email}`);
    //     return res.data;


    // })

    const { data: myAddFish = [], refetch } = useQuery({
        queryKey: ['myAddFish'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myAddFish/${user.email}`);
            return res.data;

        },
    });

    console.log(myAddFish)


    return (
        <div className='container lg:container lg:mx-auto px-20  '>
            <h2 className='text-center text-4xl font-bold pt-8 pb-16'> My Fish Information</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Fish<br /> Image</th>
                            <th>Fish<br /> Name</th>
                            <th>Category</th>
                            <th> Available<br />Fish</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Total Buy <br />Fish</th>
                            <th>Feedback</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            myAddFish.map((item) => <tr key={item._id}>
                                <td>
                                    <div className=" w-24 h-24">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td>
                                    {item.fishName}

                                </td>

                                <td>{item.category}</td>
                                <td>{item.availableFish}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <td>{item.buy}</td>
                                <td>{item.feedback}</td>
                                <th>

                                    <Link
                                        to={`/dashboard/fishUpdateInfo/${item._id}`}>
                                        <button className="btn btn-warning btn-xs text-white">Update</button>
                                    </Link>

                                </th>


                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AddedFish;