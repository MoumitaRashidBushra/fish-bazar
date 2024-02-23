import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const FishUpdateInfo = () => {

    const updateInfo = useLoaderData();

    const { _id, fishName, details, availableFish, price, } = updateInfo;
    console.log(updateInfo)
    const { user, updateUser, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        axiosSecure.put(`/sellerUpdateInfo/${_id}`, data)
            .then(data => {
                //refetch()
                if (data.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Fish Info Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                }
            })
    }


    return (
        <div className='container lg:container px-20  '>

            <h2 className='text-center text-4xl font-bold pt-8 pb-16'>Fish Update Information!!!</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8  mb-6 '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fish Name</span>
                        </label>
                        <input type="text" placeholder="Fish Name" name='fishName'
                            {...register("fishName", { required: true })} defaultValue={fishName} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Fish</span>
                        </label>
                        <input type="text" placeholder="Available Fish" name='availableFish'
                            {...register("availableFish", { required: true })} defaultValue={availableFish} className="input input-bordered w-full" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' {...register("price", { required: true })} defaultValue={price} className="input input-bordered w-full" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short details</span>
                        </label>
                        <textarea placeholder="Short details" name='details' {...register("details", { required: true })} defaultValue={details} className="input textarea textarea-bordered w-full h-24" ></textarea>
                    </div>


                </div>

                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="FISH UPDATE INFO" className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black  " />
                </div>

            </form>

        </div>
    );
};

export default FishUpdateInfo;