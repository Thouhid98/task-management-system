import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    },
    
    // User Dashboard 
   
    
   
]);

export default router;
