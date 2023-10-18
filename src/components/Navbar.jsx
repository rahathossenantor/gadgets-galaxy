import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, profileAvatar, setProfileAvatar, signOutUser } = useContext(AuthContext);

    const links = <>
        <NavLink to="/"><li className="text-base px-3 hover:text-[#e73c17] uppercase">Home</li></NavLink>
        <NavLink to="/login"><li className="text-base px-3 hover:text-[#e73c17] uppercase">Login</li></NavLink>
        <NavLink to="/register"><li className="text-base px-3 hover:text-[#e73c17] uppercase">Register</li></NavLink>
        <NavLink to="/profile"><li className="text-base px-3 hover:text-[#e73c17] uppercase">Profile</li></NavLink>
    </>

    // logout user
    const logOut = () => {
        signOutUser()
            .then(() => {
                setProfileAvatar(null);
                Swal.fire({
                    title: "Success!",
                    text: "User logged out successfully!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
            })
            .catch(err => {
                Swal.fire({
                    title: "Error!",
                    text: err.message,
                    icon: "error",
                    confirmButtonText: "Close"
                });
            });
    };

    if (user) {
        setProfileAvatar(user.photoURL);
    }

    return (
        <nav className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="flex items-center justify-center"><img src="https://i.ibb.co/qJk3bD4/basket.png" className="inline-block w-12" alt="logo" /><h3 className="text-3xl">Tech<span className="text-[#e73c17]">X</span> </h3></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="2xl:inline-flex xl:inline-flex lg:hidden md:inline-flex hidden">
                        <h3 className="mr-2 text-lg font-poppins">{user ? user?.displayName?.length > 15 ? user.displayName.slice(0, 15) : user.displayName : ""}</h3>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex hidden">
                        <div className="w-10 rounded-full">
                            <img src={profileAvatar ? profileAvatar : "https://i.ibb.co/bKkKVMn/user.png"} className="inline-block w-full" />
                        </div>
                    </label>
                    <Link to={!user && "/login"}><button onClick={user && logOut} className="bn632-hover bn28 px-[30px] py-[8px] font-poppins">{user ? "LogOut" : "LogIn"}</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
