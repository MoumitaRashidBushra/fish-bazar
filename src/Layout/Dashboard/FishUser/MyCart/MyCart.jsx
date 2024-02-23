import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { FaRegTrashAlt } from "react-icons/fa";
import UseCart from '../../../../Hooks/UseCart/UseCart';
import { Link } from 'react-router-dom';
const MyCart = () => {





    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: addedFishItems = [], refetch } = useQuery({
        queryKey: ['addedFishItems'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCartSelectInfo/${user.email}`);
            return res.data;
        },
    });
    //console.log(select)
    const totalAmount = addedFishItems.reduce((total, item) => total + item.totalPrice, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fish-bazar-server.vercel.app/myCartSelectInfo/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `Your ${fishName}  has been deleted.`,
                                'success'
                            )
                        }
                    })
            }
        })
    }





    return (
        <div className='container lg:container px-20  '>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl text-sky-950">Items: {addedFishItems.length}</h2>
                <h2 className="text-4xl text-sky-950">Total Price: {totalAmount}</h2>
                {addedFishItems.length ? <Link to="/dashboard/payment">
                    <button className="btn  btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black ">Pay</button>
                </Link> :
                    <button disabled className="btn  btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black ">Pay</button>
                }

            </div>
            <h2 className='text-center text-4xl font-bold pb-16 text-sky-950'> My Add To Cart Information!!!</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='text-center text-black'>Fish Image</th>
                            <th className='font-bold text-black'>Fish Name</th>
                            <th className='font-bold text-black'>
                                Seller Name</th>
                            <th className='font-bold text-black'>
                                Seller  Email</th>
                            <th className='font-bold text-black'>Category</th>
                            <th className='font-bold text-black'> Available Fish</th>

                            <th className='font-bold text-black'>quantity</th>
                            <th className='font-bold text-black'>Price</th>
                            <th className='font-bold text-black'>totalPrice</th>
                            <th className='font-bold text-black'>Delete</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            addedFishItems.map((item) => <tr key={item._id}>
                                <td>
                                    <div className=" w-48 ">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </td>

                                <td>
                                    {item.fishName} Fish

                                </td>
                                <td>
                                    {item.sellerName}</td>
                                <td>
                                    {item.sellerEmail}</td>
                                <td >{item.category}</td>
                                <td className='text-center'>{item.availableFish} kg</td>
                                <td className='text-center'>{item.quantity} kg</td>
                                <td className='text-right'>{item.price}</td>
                                <td className='text-right'>{item.totalPrice}</td>



                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn btn-warning btn-sm text-white"><FaRegTrashAlt /></button>
                                </th>
                                {/* <th>
                                <Link
                                    to={`/dashboard/payment/${item._id}`}>
                                    <button className="btn btn-info btn-xs text-white">Pay</button>
                                </Link>

                            </th> */}


                            </tr>)
                        }






                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;