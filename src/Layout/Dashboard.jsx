import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";


import { FaBook, FaEnvelope, FaHome, FaIdBadge, FaList, FaPaypal, FaRegCommentDots, FaUtensils } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {
    const { user } = useContext(AuthContext)
    // const {email} = user


    return (
        <>
            <div className='flex'>
                <div className='w-64 min-h-screen bg-[#D99904]'>
                    <ul className='menu p-4'>

                        {
                            user ?
                                <>
                                    <li>
                                        <NavLink to={`/dashboard/user-profile/${user?.email}`}>
                                            <FaIdBadge />
                                            User Profile</NavLink>
                                    </li>

                                    <li >
                                        <NavLink to='/dashboard/addtask'>
                                            <FaUtensils></FaUtensils>
                                            Add Tasks</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/manage-tasks">
                                            <FaList></FaList>
                                            Task List</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/reviews'>
                                            <FaRegCommentDots />
                                            Your Reviews</NavLink>
                                    </li>
                                </> : ''
                        }




                        <div className='divider'></div>

                        <li>
                            <NavLink to='/'>
                                <FaHome></FaHome>
                                Home</NavLink>
                        </li>

                        <li>
                            <NavLink to='/contact-us'>
                                <FaEnvelope />
                                Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex-1 p-6'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Dashboard;