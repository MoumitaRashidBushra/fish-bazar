import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";

const UseRole = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isRole, isLoading: isRoleLoading } = useQuery({
        queryKey: ['isRole', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data.roles;
        }
    })
    return [isRole, isRoleLoading]
};
export default UseRole;