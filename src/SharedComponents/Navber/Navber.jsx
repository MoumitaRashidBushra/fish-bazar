import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navber = () => {
    const { user, logout } = useContext(AuthContext);

    const handleToLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));

    }

    return (
        <div className=''>
            <div className='navbar text-white  max-w-screen-4xl bg-cyan-950   fixed z-10  '>
                {/* #2f97c7  bg-black  fixed z-10 */}
                <div className="container lg:container lg:mx-auto  lg:px-10 lg:pt-2 pb-3 ">
                    <div className="navbar-start container lg:container ">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow  rounded-box w-52 bg-black bg-opacity-60 text-white">

                                <Link to='/' className='ms-2  pt-3 text-white font-bold'>Home</Link>
                                <Link to='/fish' className='ms-2  pt-3 text-white font-bold'>Fish</Link>
                                <Link
                                    // to='/fishfood'
                                    className='ms-2  pt-3 text-white font-bold'>Fish Food</Link>
                                <Link to='/seller' className='ms-2  pt-3 text-white font-bold'>Seller</Link>
                                <Link
                                    // to='/offers' 
                                    className='ms-2  pt-3 text-white font-bold'>Offers</Link>
                                <Link

                                    // to='/blog' 
                                    className='ms-2  pt-3 text-white font-bold'>Blog</Link>
                                <Link to='/contact' className='ms-2  pt-3 text-white font-bold pb-4'>Contact</Link>

                                {
                                    user ?
                                        <>
                                            <Link to='dashboard' className='mx-2 lg:mx-4'>Dashboard</Link>


                                        </>
                                        :

                                        ""
                                }
                            </ul>
                        </div>

                        <div className='flex items-center gap-1 lg:-mt-7 -mt-10 ms-12 lg:ms-0'>

                            {/* <img className='lg:w-28 w-16 rounded ' src="https://i.ibb.co/K5RcHW0/19734726-zdxn-8utu-200403-removebg-preview.png" alt="" /> */}

                            <Link to='/' className=' text-white text-xl lg:text-3xl italic font-bold hover:text-[#ed8311] '><span className='text-3xl lg:text-6xl font-bold '>F</span>ishBazar</Link>

                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex items-center justify-center">
                        <ul className="menu menu-horizontal px-1 mr-44">
                            <Link to='/' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Home</Link>

                            <Link to='/fish' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Fish</Link>

                            <Link to='/fishfood' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Fish Food</Link>

                            <Link to='/seller' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Seller</Link>

                            <Link to='/offers' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Offers</Link>

                            <Link to='/blog' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Blog</Link>
                            <Link to='/contact' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold '>Contact</Link>


                            {
                                user ?
                                    <>
                                        <Link to='dashboard' className=' mt-3   py-2 text-base text-white hover:text-[#ed8311] px-4 rounded-lg font-bold'>Dashboard</Link>


                                    </>
                                    :

                                    ""
                            }
                        </ul>
                    </div>
                    <div className="navbar-end pt-4 lg:pt-1">
                        <div className='flex justify-center items-center'>
                            {/* <div className="tooltip" data-tip="Moumita">
                           
                            <img className='w-16 rounded-full ms-2 mr-10' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1697381991~exp=1697382591~hmac=6d6d7ce5f2f44a62a37bd886862b5c1dfaeda8136458b06ed627551ded88c915" />
                         
                        </div> */}
                            {/* {user?.photoURL} */}
                            {/* {user?.displayName} #E25111 */}

                            {
                                user && <div className="tooltip" data-tip={user?.displayName}>
                                    <img className='w-16 rounded-full  ms-2 mr-10' src={user?.photoURL} />
                                </div>
                            }

                            {
                                user ?
                                    <>

                                        <Link onClick={handleToLogout} className='btn btn-outline  px-6  text-white text-base font-bold  hover:bg-[#ed8311] hover:border-none ms-14 lg:ms-6'>Logout</Link >
                                    </>
                                    :

                                    <Link to='/login' className="btn btn-outline  px-6  text-white text-base font-bold  hover:bg-[#ed8311] hover:border-none ms-14 lg:ms-6">Login</Link>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;