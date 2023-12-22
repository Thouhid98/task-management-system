import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // const email = user?.email;


    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        {
                            user?.email ?
                                <Link to="/dashboard/user-profile/:email">
                                    <li><a>Dashboard</a></li>
                                </Link> : ''
                        }

                    </ul>
                </div>
                <a className=" text-3xl font-bold ">Task<span className="font-bold text-orange-500">MS</span></a>
            </div>
            <div className="navbar-center lg:-ml-36 font-semibold hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/">Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    {
                        user?.email ?
                            <Link to="/dashboard/user-profile/:email">
                                <li><a>Dashboard</a></li>
                            </Link> : ''
                    }
                </ul>
            </div>


            <div>
                {
                    user?.email ?
                        <>
                            <NavLink to='/login'>
                                <button onClick={handleSignOut} className="btn ml-16 md:ml-64 lg:ml-96 bg-white  my-3 border-[#FF3811] text-[#FF3811]">Logout</button>
                            </NavLink>
                        </> :
                        <>
                        <div className="flex ml-2 md:ml-52 lg:ml-[410px]">
                            <div className=" mr-2">
                                <a href="/login" className="btn bg-orange-500 text-white">Login</a>
                            </div>

                            <Link to="/register">
                                <div className="navbar-end ">
                                    <a className="btn bg-orange-500 text-white">Register</a>
                                </div>
                            </Link>
                        </div>                            
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;