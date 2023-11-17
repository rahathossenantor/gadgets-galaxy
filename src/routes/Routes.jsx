import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AuthProvider from "../providers/AuthProvider";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoutes from "./PrivateRoutes";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import BrandDetails from "../pages/BrandDetails";
import UpdateProduct from "../pages/UpdateProduct";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><App></App></AuthProvider>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/add-product",
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: "/brand/:brandName",
                element: <BrandDetails></BrandDetails>,
                loader: ({ params }) => fetch(`https://gadgets-galaxy-server.vercel.app/products/${params.brandName}`)
            },
            {
                path: "/product/:productId",
                element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://gadgets-galaxy-server.vercel.app/product/${params.productId}`)
            },
            {
                path: "/product-details/:productId",
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://gadgets-galaxy-server.vercel.app/product/${params.productId}`)
            },
            {
                path: "/my-cart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            }
        ]
    }
]);

export default router;
