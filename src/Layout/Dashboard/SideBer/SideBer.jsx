import React from 'react';
import UseRole from '../../../Hooks/UseRole/UseRole';
import { Link, Outlet } from 'react-router-dom';

const SideBer = () => {
    const [isRole] = UseRole();
    return (
        <div className=' '>
            <div className=' '>



                {
                    isRole === "admin" && <>
                        <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Fish Bazar</a>
                        </div>

                        <div className='mx-auto flex' >

                            <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                            {/* 
                            <Link to='/dashboard/manageFish' className='mx-2 lg:mx-4'> Manage Fish</Link>

                            <Link to='/dashboard/manageUsers' className='mx-2 lg:mx-4'>Manage Users</Link >
 */}


                        </div>
                    </>

                }
                {
                    isRole === "seller" && <>
                        {/* <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Fish Bazar</a>
                        </div>

                        <div className='mx-auto flex' >
                            <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                            <Link to='/dashboard/addAFish' className='mx-2 lg:mx-4'> Add A Fish</Link>

                            <Link to='/dashboard/myFish' className='mx-2 lg:mx-4'> My Fish</Link >



                        </div> */}


                        <div className="drawer lg:drawer-open">
                            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content flex flex-col items-center justify-center">
                                {/* Page content here */}
                                <Outlet></Outlet>
                                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 min-h-full bg-black text-base-content">
                                    {/* Sidebar content here */}
                                    <Link to='/' className=' text-white text-xl lg:text-3xl italic font-bold hover:text-[#ed8311] '><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</Link>

                                    <Link to='/' className=' mt-3  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Home</Link>

                                    <Link to='/dashboard/addAFish' className=' mt-3  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Add A Fish</Link>
                                </ul>

                            </div>
                        </div>

                    </>
                }






                {
                    isRole === "Fishuser" && <>
                        <div className='flex'>
                            <a className="btn btn-ghost normal-case text-2xl font-extrabold">Fish Bazar</a>
                        </div>

                        <div className='mx-auto flex' >
                            <Link to='/' className='mx-2 lg:mx-4'>Home</Link>

                            <Link to='/dashboard/myAddFish' className='mx-2 lg:mx-4'>
                                My Add fish</Link>

                            <Link to='/dashboard/myEnrClasses' className='mx-2 lg:mx-4'> My Enrolled Classes</Link >

                            <Link to='/dashboard/paymentHistory' className='mx-2 lg:mx-4'>  Payment History</Link >




                        </div>
                    </>
                }






            </div>

        </div>
    );
};

export default SideBer;