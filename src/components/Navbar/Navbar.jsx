
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>           
                        <li><a>Contact</a></li>
                        <li><a>Dashboard</a></li>

                    </ul>
                </div>
                <a className=" text-3xl font-bold ">Task<span className="font-bold text-orange-500">MS</span></a>
            </div>
            <div className="navbar-center font-semibold hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Dashboard</a></li>
                </ul>
            </div>
            <div className="navbar-end mr-">
                <a className="btn bg-orange-500 text-white">Login</a>
            </div>
        </div>
    );
};

export default Navbar;