import React, { Fragment, useContext, useState } from 'react';
import axios from 'axios';
import { URL } from "../url.js";
import { Link, useNavigate } from "react-router-dom";
import {UserContext} from "../context/UserContext.jsx"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${URL}/api/auth/login`, { email, password },{withCredentials:true});
            setUser(res.data)
            navigate("/");
        } catch (error) {
            setError(true)
            console.log(error)
        }
    };

    return (
        <Fragment>
            <div className='w-full flex justify-center items-center h-[70vh]'>
                <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
                    <h1>Login to your account</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter email' className='w-full px-4 py-2 border-2 border-black outline-0' />
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' className='w-full px-4 py-2 border-2 border-black outline-0' />
                    <button onClick={handleLogin} className='w-full px-4 py-4 text-lg font-bold
                    text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black '>Login</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                </div>
            </div>
        </Fragment>
    )
}

export default Login
