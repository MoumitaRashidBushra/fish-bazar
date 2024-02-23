

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

const UseCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myCartSelectInfo?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default UseCart;