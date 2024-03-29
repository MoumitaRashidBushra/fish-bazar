import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaEyeSlash, FaEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm();
    //const onSubmit = data => console.log(data);



    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const { googleLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    const onSubmit = data => {
        console.log(data);



        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleToGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const databaseUser =
                {
                    name: loggedUser.displayName,
                    email: loggedUser.email
                }
                fetch('https://fish-bazar-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(databaseUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                //navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // const handleToGoogleLogin = () => {
    //     googleLogin()
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             navigate('/')
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-8 pb-6 '>

            <div className=' mx-auto lg:mx-60 px-8 lg:px-28 py-10 '>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="card  w-full max-w-sm shadow bg-base-100">
                        <div className="card-body">
                            <h1 className=" text-2xl lg:text-3xl font-bold mb-3 text-center"> Please Login Now!!!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"  {...register("email", { required: true, maxLength: 200 })} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>



                                <div className='flex gap-10'>
                                    <input type={showPassword ? ' text' : 'password'} placeholder="password"  {...register("password", { required: true, maxLength: 200 })} className="input input-bordered" />
                                    <button onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                    </button>
                                </div>

                                <p className='text-red-500'>{error}</p>

                            </div>
                            <div className="form-control mt-6">

                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </div>
                        <div className='text-center mt-2'>
                            <p className='font-bold'>Don't Have an Account?<button className="btn btn-outline  px-6  text-white text-base font-bold bg-black hover:bg-[#ed8311] hover:border-none   ms-2"><Link to='/register'>Register</Link></button> </p>
                            <div className="divider px-3">OR</div>

                            <button
                                onClick={handleToGoogleLogin}
                                className="btn btn-outline  px-6  text-white text-base font-bold  bg-black  hover:bg-[#ed8311] hover:border-none   mt-3 mb-6"><FaGoogle className='mr-2' /> Login wth Google</button> <br />

                        </div>
                    </div>

                </form>

            </div>




        </div>
    );
};

export default Login;