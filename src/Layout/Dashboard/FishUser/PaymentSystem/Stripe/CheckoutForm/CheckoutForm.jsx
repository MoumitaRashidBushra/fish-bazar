import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
//import './CheckoutForm.css'

const CheckoutForm = () => {
    //console.log(total)

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const navigate = useNavigate();

    const { data: addedFishItems = [], refetch } = useQuery({
        queryKey: ['addedFishItems'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCartSelectInfo/${user.email}`);
            return res.data;
        },
    });

    const totalAmount = addedFishItems.reduce((total, item) => total + item.totalPrice, 0);

    useEffect(() => {
        if (totalAmount > 0) {
            axiosSecure.post('/create-payment-intent', { totalAmount })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [totalAmount, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            //console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                //    fishId: pay._id,
                //     fishName: pay.fishName,
                //     classId: pay.classId,
                cartIds: addedFishItems.map(item => item._id),
                fishItemIds: addedFishItems.map(item => item.fishId),
                fishItemNames: addedFishItems.map(item => item.fishName),
                availableFish: addedFishItems.map(item => item.availableFish),
                payFishImage: addedFishItems.map(item => item.image),
                // payImage: pay.image,
                totalAmount,
                date: new Date(),


            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Payment Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'

                        })
                        navigate('/dashboard/paymentHistory')
                    }
                })
        }





    }
    return (
        <>
            <div className=" container lg:container mx-auto lg:mx-auto  lg:px-40 ">
                <form className="w-full lg:m-4 border border-indigo-600 py-8 px-8" onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-info btn-sm mt-8 w-full
                    " type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay
                    </button>
                </form>
                {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
                {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
            </div>
        </>
    );
};

export default CheckoutForm;