import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../Layout/Dashboard/Dashboard/Dashboard";
import SellerRoutes from "./SellerRoutes/SellerRoutes";
import AddAFish from "../Layout/Dashboard/SellerDashboard/AddAFish/AddAFish";


import AdminsRoutes from "./AdminsRoutes/AdminsRoutes";
import ManageUsers from "../Layout/Dashboard/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import ManageFish from "../Layout/Dashboard/Dashboard/AdminDashboard/ManageFish/ManageFish";
import MyCart from "../Layout/Dashboard/FishUser/MyCart/MyCart";
import MyBuyFish from "../Layout/Dashboard/FishUser/MyBuyFish/MyBuyFish";
import PaymentHistory from "../Layout/Dashboard/FishUser/PaymentHistory/PaymentHistory";
import FishUserRoutes from "./FishUserRoutes/FishUserRoutes";
import AddedFish from "../Layout/Dashboard/SellerDashboard/AddedFish/AddedFish";
import FishUpdateInfo from "../Layout/Dashboard/SellerDashboard/FishUpdateInfo/FishUpdateInfo";
import FishPage from "../Pages/FishPage/FishPage/FishPage/FishPage";
import ViewFishDetails from "../Pages/FishPage/FishPage/ApprovedFish/ViewFishDetails/ViewFishDetails";
import Payment from "../Layout/Dashboard/FishUser/PaymentSystem/Stripe/Payment/Payment";
import SellerPage from "../Pages/SellerPage/SellerPage/SellerPage";
import FeedBack from "../Layout/Dashboard/Dashboard/AdminDashboard/FeedBack/FeedBack";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "fish",
                element: <FishPage></FishPage>,
            },
            {
                path: "seller",
                element: <SellerPage></SellerPage>,
            },
            {
                path: "login",
                element: <Login></Login>,
            },
            {
                path: "register",
                element: <Register></Register>,
            },
            {
                path: "viewFishDetails/:id",
                element: <ViewFishDetails></ViewFishDetails>,
                loader: ({ params }) => fetch(`https://fish-bazar-server.vercel.app/selectedFish/${params.id}`)
            },
        ],

    },

    {
        path: "dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            // {
            //     path: "/dashboard",
            //     element: <SideBer></SideBer>,
            // },
            //     //Admin Routes
            {
                path: "manageFish",
                element: <AdminsRoutes><ManageFish></ManageFish></AdminsRoutes>,
            },
            {
                path: "/dashboard/feedback/:id",
                element: <AdminsRoutes><FeedBack></FeedBack></AdminsRoutes>,
                loader: ({ params }) => fetch(`https://fish-bazar-server.vercel.app/feedback/${params.id}`)
            },
            {
                path: "manageUsers",
                element: <AdminsRoutes><ManageUsers></ManageUsers></AdminsRoutes>,
            },

            //     //Seller Route
            {
                path: "/dashboard/addAFish",
                element: <SellerRoutes><AddAFish></AddAFish></SellerRoutes>,
            },
            {
                path: "/dashboard/addedFish",
                element: <SellerRoutes><AddedFish></AddedFish></SellerRoutes>,
            },
            {
                path: "/dashboard/fishUpdateInfo/:id",
                element: <SellerRoutes><FishUpdateInfo></FishUpdateInfo></SellerRoutes>,
                loader: ({ params }) => fetch(`https://fish-bazar-server.vercel.app/fishUpdateInfo/${params.id}`)
            },

            //     //FishUser routes
            {
                path: "myCart",
                element: <FishUserRoutes><MyCart></MyCart></FishUserRoutes>
            },

            {
                path: "/dashboard/payment",
                element: <Payment></Payment>,
                // loader: ({ params }) => fetch(`https://sports-club-server.vercel.app/payment/${params.id}`)
            },
            {
                path: "/dashboard/myBuyFish",
                element: <FishUserRoutes><MyBuyFish></MyBuyFish></FishUserRoutes>,
            },
            {
                path: "/dashboard/paymentHistory",
                element: <FishUserRoutes><PaymentHistory></PaymentHistory></FishUserRoutes>,
            },
        ]
    },
]);
export default router;