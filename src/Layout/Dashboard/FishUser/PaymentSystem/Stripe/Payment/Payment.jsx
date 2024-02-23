import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useLoaderData } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { useQuery } from '@tanstack/react-query';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    // const pay = useLoaderData();

    // const { _id, className, instructorName, price } = pay;
    // const total = parseFloat(price.toFixed(2));
    // console.log(total)

    const { data: addedFishItems = [], refetch } = useQuery({
        queryKey: ['addedFishItems'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCartSelectInfo/${user.email}`);
            return res.data;
        },
    });

    const totalAmount = addedFishItems.reduce((total, item) => total + item.totalPrice, 0);
    return (
        <div className='container lg:container lg:mx-auto px-10  lg:px-20 lg:pt-8 pb-6 '>
            <h2 className='text-center text-2xl lg:text-4xl font-bold pt-10 pb-14 '> Please Payment
                ${totalAmount}
            </h2>

            <Elements stripe={stripePromise}>
                <CheckoutForm
                //totalAmount={totalAmount} pay={pay} 
                ></CheckoutForm>
            </Elements>


        </div>
    );
};

export default Payment;