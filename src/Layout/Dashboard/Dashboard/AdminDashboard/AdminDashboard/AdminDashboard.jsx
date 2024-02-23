import React, { useContext } from 'react';
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminDashboard = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: adminStats = {} } = useQuery({
        queryKey: ['adminStats'], // Corrected typo here
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    console.log(adminStats);



    // const { data: chartData = [] } = useQuery({
    //     queryKey: ['order-stats'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/order-stats');
    //         return res.data;
    //     }
    // })

    return (
        <div className='container lg:container px-56 mt-4'>
            <h2 className="text-3xl mb-10 text-sky-950">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>


            <div className="stats shadow mb-20">

                <div className="stat place-items-center">
                    <div className="stat-title text-sky-950 font-bold">Revenue</div>
                    <div className="stat-value">${adminStats.revenue}28900</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-sky-950 font-bold">FishItems</div>
                    <div className="stat-value text-secondary">{adminStats.fishItems}14</div>
                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title text-sky-950 font-bold">Users</div>
                    <div className="stat-value">{adminStats.users}13</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title text-sky-950 font-bold">Total buy</div>
                    <div className="stat-value">{adminStats.orders}15</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>

    );
};

export default AdminDashboard;