import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UseRole from '../../../Hooks/UseRole/UseRole';
import { FaHouse, FaFish } from "react-icons/fa6";
import AdminDashboard from './AdminDashboard/AdminDashboard/AdminDashboard';

const Dashboard = () => {
    const [isRole] = UseRole();
    return (
        <div>
            {
                isRole === "admin" && <>

                    <div className="drawer lg:drawer-open ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center bg-white">
                            {/* Page content here */}
                            <AdminDashboard></AdminDashboard>
                            <Outlet></Outlet>

                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu px-6 py-4 mx-auto w-full min-h-full bg-sky-950 ">
                                {/* Sidebar content here */}

                                <NavLink to='/' className=' text-white text-xl lg:text-3xl italic font-bold hover:text-[#ed8311] '><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</NavLink>


                                <NavLink to='/' className=' mt-2  py-2 text-base text-white hover:text-[#ed8311]  flex justify-center gap-2 items-center rounded-lg font-bold '><FaHouse></FaHouse> <span className='mt-1.5'>Home</span></NavLink>


                                <NavLink to='/dashboard/manageFish' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>Manage Fish</span></NavLink>


                                <NavLink to='/dashboard/manageUsers' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>Manage Users</span></NavLink>




                            </ul>

                        </div>
                    </div>

                </>
            }
            {
                isRole === "seller" && <>

                    <div className="drawer lg:drawer-open ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center bg-white">
                            {/* Page content here */}
                            <Outlet></Outlet>

                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu px-6 py-4 mx-auto w-full min-h-full bg-sky-950 ">
                                {/* Sidebar content here */}

                                <NavLink to='/' className=' text-white text-xl lg:text-3xl italic font-bold hover:text-[#ed8311] '><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</NavLink>


                                <NavLink to='/' className=' mt-2  py-2 text-base text-white hover:text-[#ed8311]  flex justify-center gap-2 items-center rounded-lg font-bold '><FaHouse></FaHouse> <span className='mt-1.5'>Home</span></NavLink>


                                <NavLink to='/dashboard/addAFish' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>Add A Fish</span></NavLink>


                                <NavLink to='/dashboard/addedFish' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>Added Fish</span></NavLink>


                            </ul>

                        </div>
                    </div>

                </>
            }
            {
                isRole === "fishuser" && <>

                    <div className="drawer lg:drawer-open ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center bg-white">
                            {/* Page content here */}
                            <Outlet></Outlet>

                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu px-10 py-4 mx-auto w-full min-h-full bg-sky-950  ">
                                {/* Sidebar content here */}

                                <NavLink to='/' className=' text-white text-xl mt-8 lg:text-3xl italic font-bold hover:text-[#ed8311] '><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</NavLink>


                                <NavLink to='/' className=' mt-2  py-2 text-base text-white hover:text-[#ed8311]  flex justify-center gap-2 items-center rounded-lg font-bold '><FaHouse></FaHouse> <span className='mt-1.5'>Home</span></NavLink>


                                <NavLink to='/dashboard/myCart' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>My Cart</span></NavLink>


                                <NavLink to='/dashboard/myBuyFish' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>My Buy Fish</span></NavLink>


                                <NavLink to='/dashboard/paymentHistory' className=' mt-1  py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold flex justify-center gap-2 items-center'><FaFish className='text-xl' /><span className='mt-1.5'>Payment History</span></NavLink>


                            </ul>

                        </div>
                    </div>

                </>
            }
        </div>
    );
};

export default Dashboard;