import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const { data: manageFish = [], refetch } = useQuery({
        queryKey: ['manageFish'],
        queryFn: async () => {
            const res = await fetch('https://fish-bazar-server.vercel.app/users');
            return res.json();
        },
    });


    const handleToMakeAdmin = user => {
        fetch(`https://fish-bazar-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleToMakeSeller = user => {
        fetch(`https://fish-bazar-server.vercel.app/users/seller/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an seller Now!!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // const { data: manageFish = [], refetch } = useQuery(['manageFish'], async () => {
    //     const res = await fetch('https://fish-bazar-server.vercel.app/users')
    //     return res.json();

    // })
    // console.log(manageFish)


    return (
        <div className="  container lg:container lg:mx-auto px-20   ">
            <h3 className="text-3xl font-semibold  text-center mb-10 text-sky-950">Total Users: {manageFish.length}</h3>


            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageFish?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'Admin' :
                                    <button
                                        onClick={() => handleToMakeAdmin(user)}
                                        className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'seller' ? 'seller' :
                                    <button
                                        onClick={() => handleToMakeSeller(user)}
                                        className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button>
                                }</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;