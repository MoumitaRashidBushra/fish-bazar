import React from 'react';
import useAxiosSecure from '../../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const ManageFish = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: FishInfo = [], refetch } = useQuery({
        queryKey: ['FishInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get('/fish');
            return res.data;
        },
    });



    const handleApprove = item => {
        const newItem = { status: "Approved" }

        axiosSecure.patch(`/approved/${item._id}`, newItem)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Fish Approved Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }



    const handleDeny = item => {
        const newItem = { status: "Deny" }

        axiosSecure.patch(`/deny/${item._id}`, newItem)
            .then(data => {
                refetch()
                if (data.data.modifiedCount > 0) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Fish Deny Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }



    return (
        <div className='container lg:container px-20 '>
            <h2 className='text-center text-4xl font-bold pb-16 text-sky-950'> Update the
                Seller FishInfo Information</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Fish<br /> Image</th>
                            <th>Fish<br /> Name</th>
                            <th>
                                Seller <br /> Name</th>
                            <th>
                                Seller <br /> Email</th>
                            <th>Category</th>
                            <th> Available<br />Fish</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            FishInfo.map((item) => <tr key={item._id}>
                                <td>
                                    <div className=" w-24 h-24">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td>
                                    {item.fishName}

                                </td>
                                <td>{item.
                                    sellerName}</td>
                                <td>{item.
                                    sellerEmail}</td>
                                <td>{item.category}</td>
                                <td>{item.availableFish}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <th>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        disabled={item.status === 'Approved' || item.status === 'Deny'}
                                        className="btn btn-warning btn-xs text-white">Approve</button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleDeny(item)}
                                        disabled={item.status === 'Approved' || item.status === 'Deny'}
                                        className="btn btn-error btn-xs text-white">Deny</button>
                                </th>
                                <th>
                                    <Link to={`/dashboard/feedback/${item._id}`}>
                                        <button className="btn btn-info btn-xs text-white">Feedback</button>
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

export default ManageFish;