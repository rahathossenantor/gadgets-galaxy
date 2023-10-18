import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AuthProvider from "../providers/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><App></App></AuthProvider>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);

export default router;
