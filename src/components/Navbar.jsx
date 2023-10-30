import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../context/UserContext"
import axios from 'axios';
import { URL } from '../url';

const Navbar = () => {
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    console.log(user)

    const handleLogout = async () => {
        try {
            const res = await axios.get(`${URL}/api/auth/logout`, { withCredentials: true })
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // grab everything we need
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        // add event listener
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, []);
    return (
        <Fragment>

            {/* navbar */}
            <nav className="bg-gray-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                                <Link to={`/`} className="flex items-center py-5 px-3 text-gray-700">
                                    <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="font-bold">Blog</span>
                                </Link>
                            </div>
                            {/* primary nav */}
                            <div className="flex items-center space-x-1 hidden md:flex">

                                <input type="text" className='outline-none px-3' placeholder='Search a post' />
                                <p className='cursor-pointer'><BsSearch /></p>

                            </div>
                        </div>
                        {/* secondary nav */}
                        <div className="flex items-center space-x-1 hidden md:flex">
                            {user ? <h3 className='py-5 px-3'><Link to={`/write`}>Write</Link></h3> : <h3 className='className="py-5 px-3"'><Link to={`/login`}>Login</Link></h3>}
                            {user ? <h3 className='py-5 px-3'><Link to={`/profile`}>Profile</Link></h3> : <h3 className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'><Link to={`/register`}>Register</Link></h3>}
                            {user && <h3 className='py-5 px-3'><Link to={`/myblogs`}>My Blogs</Link></h3>}
                            {user && <h3 className='py-5 px-3' onClick={handleLogout}><Link to={`/`}>Logout</Link></h3>}
                        </div>
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button className="mobile-menu-button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className="mobile-menu hidden md:hidden flex justify-center items-center flex-col">
                    {user ? <h3 className='py-2 px-3'><Link to={`/write`}>Write</Link></h3> : <h3 className='className="py-5 px-3"'><Link to={`/login`}>Login</Link></h3>}
                    {user ? <h3 className='py-2 px-3'><Link to={`/profile`}>Profile</Link></h3> : <h3 className='py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300'><Link to={`/register`}>Register</Link></h3>}
                    {user && <h3 className='py-2 px-3'><Link to={`/myblogs`}>My Blogs</Link></h3>}
                    {user && <h3 className='py-2 px-3' onClick={handleLogout}><Link to={`/`}>Logout</Link></h3>}
                </div>
            </nav>

        </Fragment>
    )
}

export default Navbar
