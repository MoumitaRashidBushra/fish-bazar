import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseRole from '../../../../../Hooks/UseRole/UseRole';
import { AuthContext } from '../../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';

const ViewFishDetails = () => {
    const viewFish = useLoaderData();
    const [isRole] = UseRole();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();

    const {
        _id,
        fishName,
        sellerName,
        sellerEmail,
        availableFish,
        price,
        image,
        details,
        category,
        description,
    } = viewFish;

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(parseFloat(price));

    const handleIncrease = () => {
        setQuantity(quantity + 1);
        setTotalPrice((prevPrice) => prevPrice + parseFloat(price));
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((prevPrice) => prevPrice - parseFloat(price));
        }
    };

    const handleAddToCart = () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Unauthorised',
                text: 'Please Login First',
            });

            return navigate('/login');
        }

        const addToCart = {
            fishId: _id,
            fishName,
            sellerName,
            sellerEmail,
            availableFish: parseFloat(availableFish),
            price: parseFloat(price),
            quantity,
            totalPrice,
            image,
            details,
            category,
            usermail: user.email,
        };

        axiosSecure.post('/myCartInfo', addToCart).then((data) => {
            if (data.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: `${fishName} Successfully in your cart`,
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }
        });
    };

    return (
        <div className="bg-white">
            <div className="container lg:container lg:mx-auto lg:px-10 lg:pt-48 pb-3 ">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 justify-center items-start">
                    <div className="col-span-3">
                        <img src={image} alt="" />
                        <p className="py-12 text-base">
                            <span className="font-bold">Description:</span>
                            {description}
                        </p>
                    </div>
                    <div className="col-span-2">
                        <h2 className="card-title lg:text-5xl text-xl">{fishName} Fish</h2>
                        <p className="py-2 text-lg pt-4">
                            <span className="font-bold ">Price :</span>${price} Taka
                        </p>
                        <p className='text-lg'>
                            <span className="font-bold ">Available fish:</span>
                            {availableFish} kg
                        </p>
                        <p className="py-2 text-lg">
                            <span className="font-bold ">Category:</span>
                            {category} kg
                        </p>
                        <p className='text-lg'>
                            <span className="font-bold">Seller Name:</span>
                            {sellerName}
                        </p>
                        <p className="py-2 text-lg">
                            <span className="font-bold">Seller Email:</span>
                            {sellerEmail}
                        </p>

                        <p className="py-8 text-base">
                            <span className="font-bold">details:</span>
                            {details}
                        </p>

                        <div className="flex gap-4 items-center mb-4 ">
                            <button onClick={handleDecrease} className="btn btn-sm btn-outline px-6 text-base font-bold">
                                -
                            </button>
                            <button className="btn btn-sm btn-outline px-6 text-base font-bold">{quantity}</button>
                            <button onClick={handleIncrease} className="btn btn-sm btn-outline px-6 text-base font-bold">
                                +
                            </button>
                        </div>

                        <button
                            disabled={isRole === 'admin' || isRole === 'seller' || availableFish === 0}
                            onClick={handleAddToCart}
                            className="btn   btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black "
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewFishDetails;
