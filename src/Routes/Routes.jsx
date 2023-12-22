import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../components/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Addtask from "../../src/Pages/Dashboard/Addtask/Addtask"

import Userprofile from "../Pages/Dashboard/Userprofile/Userprofile";
import Usertasks from "../Pages/Dashboard/Usertasks/Usertasks";
import Updatetask from "../Pages/Dashboard/Updatetask/Updatetask";


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
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'user-profile/:email',
                element:<Userprofile></Userprofile>
            },
            {
                path:'addtask',
                element: <Addtask></Addtask>
            },
            
            {
                path:'registered-task/:email',
                element:<Usertasks></Usertasks>
            },


            {
                path:'updatetask/:id',
                element:<Updatetask></Updatetask>
            }
        ]
    }
   
    
   
]);

export default router;
