import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxiosSecure from '../../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const imgHosting = import.meta.env.VITE_IMAGE;

const AddAFish = () => {

    const { user, updateUser, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHosting}`

    // const onSubmit = data => {
    //     console.log(data);

    //     const formData = new FormData();
    //     formData.append('image', data.image[0]);


    //     fetch(imgHostingUrl, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgResponse => {
    //             if (imgResponse.success) {
    //                 const imgURL = imgResponse.data.display_url;

    //                 const { fishName, sellerName, sellerEmail, category, availableFish, price, description, details } = data;
    //                 const newItem = { fishName, sellerName, sellerEmail, category, availableFish: parseFloat(availableFish), price: parseFloat(price), description, details, image: imgURL, image1: imgURL, image2: imgURL, image3: imgURL, status: "pending", buy: 0 }
    //                 console.log(newItem)
    //                 axiosSecure.post('/fish', newItem)
    //                     .then(data => {
    //                         console.log('after posting new fish item', data.data)
    //                         if (data.data.insertedId) {
    //                             reset();
    //                             Swal.fire({
    //                                 title: 'Success!',
    //                                 text: 'Fish Added Successfully',
    //                                 icon: 'success',
    //                                 confirmButtonText: 'Cool'

    //                             })
    //                         }
    //                     })
    //             }
    //         })
    // }

    // const onSubmit = async (data) => {
    //     const formData = new FormData();
    //     formData.append('image', data.image[0]);
    //     formData.append('image1', data.image1[0]);
    //     formData.append('image2', data.image2[0]);
    //     formData.append('image3', data.image3[0]);

    //     try {
    //         const response = await fetch(imgHostingUrl, {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         if (response.ok) {
    //             const imgResponse = await response.json();

    //             if (imgResponse.success) {
    //                 const imgURL = imgResponse.data.display_url;
    //                 const imgURL1 = imgResponse.data.display_url1;
    //                 const imgURL2 = imgResponse.data.display_url2;
    //                 const imgURL3 = imgResponse.data.display_url3;

    //                 const newItem = {
    //                     fishName: data.fishName,
    //                     sellerName: data.sellerName,
    //                     sellerEmail: data.sellerEmail,
    //                     category: data.category,
    //                     availableFish: parseFloat(data.availableFish),
    //                     price: parseFloat(data.price),
    //                     description: data.description,
    //                     details: data.details,
    //                     image: imgURL,
    //                     image1: imgURL1,
    //                     image2: imgURL2,
    //                     image3: imgURL3,
    //                     status: "pending",
    //                     buy: 0,
    //                 };

    //                 axiosSecure.post('/fish', newItem).then((data) => {
    //                     if (data.data.insertedId) {
    //                         reset();
    //                         Swal.fire({
    //                             title: 'Success!',
    //                             text: 'Fish Added Successfully',
    //                             icon: 'success',
    //                             confirmButtonText: 'Cool'
    //                         });
    //                     }
    //                 });
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error uploading images:', error);
    //     }
    // };



    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { fishName, sellerName, sellerEmail, category, availableFish, price, description, details } = data;
                    const newItem = { fishName, sellerName, sellerEmail, category, availableFish: parseFloat(availableFish), price: parseFloat(price), description, details, image: imgURL, status: "pending", buy: 0 }
                    console.log(newItem)
                    axiosSecure.post('/fish', newItem)
                        .then(data => {
                            console.log('after posting new fish item', data.data)
                            if (data.data.insertedId) {
                                //reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: `${fishName}Fish Added Successfully`,
                                    icon: 'success',
                                    confirmButtonText: 'Cool'

                                })
                            }
                        })
                }
            })
    }







    console.log(user.displayName)



    return (
        <div className='container lg:container lg:mx-auto   lg:pt-8  '>
            <h2 className='text-center text-4xl font-bold pt-10 pb-6 '>Add A Fresh River Fish</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 pt-8 px-10  '>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fish Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='fishName' {...register("fishName", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fish Image</span>
                        </label>
                        <input type="file" name='image' {...register("image", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feature Image1</span>
                        </label>
                        <input type="file" name='image1' {...register("image1", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feature Image2</span>
                        </label>
                        <input type="file" name='image2' {...register("image2", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feature Image3</span>
                        </label>
                        <input type="file" name='image3' {...register("image3", { required: true })} className="file-input file-input-bordered  w-full " />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input type="text" placeholder="Seller Name" name='sellerName' defaultValue={user?.displayName}  {...register("sellerName", { required: true })} readOnly className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller email</span>
                        </label>
                        <input type="email" placeholder="Seller email" name='sellerEmail'
                            {...register("sellerEmail", { required: true })} defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className='input input-bordered w-full' {...register("category", { required: true })}>
                            <option value="special-offer">Special Offer</option>
                            <option value="big-fish">Big Fish</option>
                            <option value="marine-fish">Marine Fish</option>
                            <option value="small-fish">Small Fish</option>
                            <option value="dry-fish">Dry Fish</option>
                            <option value="fish-egg">Fish Egg</option>

                        </select>
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available fish</span>
                        </label>
                        <input type="text" placeholder="available fish" name='availableFish'
                            {...register("availableFish", { required: true })} className="input input-bordered w-full" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price Based on Per Kg</span>
                        </label>
                        <input type="number" placeholder="price" name='price' {...register("price", { required: true })} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea placeholder="description" name='description' {...register("description", { required: true })} className="textarea textarea-bordered w-full h-36" ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short details</span>
                        </label>
                        <textarea placeholder="Short details" name='details' {...register("details", { required: true })} className="input textarea textarea-bordered w-full h-24" ></textarea>
                    </div>


                </div>

                <div className="form-control mt-10 px-20 mb-24">
                    <input type="submit" value="ADD Fish" className="btn btn-outline px-6 text-base font-bold hover:bg-[#ed8311] hover:border-none text-black  " />
                </div>

            </form>


        </div>
    );
};

export default AddAFish;