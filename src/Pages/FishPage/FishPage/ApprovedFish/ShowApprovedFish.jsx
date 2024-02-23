import React, { useContext } from 'react';
import UseRole from '../../../../Hooks/UseRole/UseRole';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowApprovedFish = ({ showAppFish }) => {

    const [isRole] = UseRole();
    const { user } = useContext(AuthContext)
    const { _id, fishName, sellerName, sellerEmail, availableFish, price, image, details, category
    } = showAppFish;
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();


    const handleAddToCart = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Unauthorised',
                text: 'Please Login First',

            })

            return navigate('/login')
        }

        const addToCart = { fishId: _id, fishName, sellerName, sellerEmail, availableFish: parseFloat(availableFish), price: parseFloat(price), image, details, category, usermail: user.email }
        console.log(addToCart)
        axiosSecure.post('/myCartInfo', addToCart)
            .then(data => {


                if (data.data.insertedId) {
                    //reset();
                    Swal.fire({
                        title: 'Success!',
                        text: `${fishName} Successfully in your cart`,
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }


    return (
        // <div className={`card w-full   ${availableFish == 0 ? 'bg-red-700 shadow ' : 'bg-slate-200 shadow border'}  `}>

        //     <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>

        //         <div >
        //             <img className='w-full' src={image} />
        //         </div>

        //         <div className='pt-2'>

        //             <h2 className="card-title lg:text-4xl text-xl">{fishName} Fish</h2>
        //             <p className='py-2 pt-4'><span className='font-bold '>Price :</span>{price} Taka</p>
        //             <p><span className='font-bold '>Available fish:</span>{availableFish} kg</p>
        //             <p className='py-2'><span className='font-bold '>Category:</span>{category} kg</p>
        //             <p ><span className='font-bold'>Seller Name:</span>{sellerName}</p>
        //             <p className='py-2'><span className='font-bold'>Seller Email:</span>{sellerEmail}</p>

        //         </div>

        //     </div>


        //     <div className='px-6 '>

        //         <p className='py-3'><span className='font-bold'>Details:</span>{details}
        //         </p>

        //         <div className="card-actions justify-center pt-3 pb-4">

        //             {/* <button className="btn  btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black ">View Details</button> */}


        //             <Link
        //                 to={`/viewFishDetails/${_id}`}>
        //                 <button className="btn  btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black ">View Details</button>
        //             </Link>


        //         </div>

        //     </div>

        // </div>

        <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img className='w-full h-52' src={image} alt="fish" /></figure>
            <div className="card-body">
                <div class="">
                    <div className=''>
                        <h2 className="text-base lg:text-4xl text-center pb-1  ">{fishName}</h2>
                        <p className='py-1 text-base text-center '><span className='font-bold '>Price :</span>{price} Taka</p>
                        <p className='py-2 text-center'><span className='font-bold '>Category:</span>{category} kg</p>

                        <p className='text-center  text-base'><span className='font-bold'>Available fish: </span>{availableFish}kg</p>
                        <p className=' py-1 text-base text-center'><span className='font-bold py-2'>Seller Name: </span>{sellerName}</p>

                        <div className="card-actions justify-center mb-4 mt-4 ">
                            <Link to={`/viewFishDetails/${_id}`} className="btn btn-outline px-6 text-base font-bold hover:bg-sky-950 hover:border-none text-black  ">More Details</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default ShowApprovedFish;