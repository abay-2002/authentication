import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useIsAuthorized from "../../costum-hooks/useIsAuthorized";

export default function RegisterPage() {
    const { loading } = useIsAuthorized();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerHandler(e){
        e.preventDefault();
        
        axios.post('http://localhost:8000/register', {
            username: name,
            email: email,
            password: password
        })
        .then(res => {
            // TODOS:
            // Show alert
            console.log(res)
        })
        .catch(err => {
            console.error(err)
            if(err.response.status === 406){
                // Email already registered
                navigate('/login')
            }
        });
    }

    return (
        <>
            {!loading &&
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                        <input 
                                            onChange={(e) => setName(e.target.value)}
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="name@company.com" 
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input 
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="name@company.com" 
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input 
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            placeholder="••••••••" 
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <Link 
                                            to={'/forgot-password'}
                                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <button 
                                        onClick={(e) => registerHandler(e)}
                                        className="block w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Register
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? 
                                        <Link 
                                            to={'/login'} 
                                            className="ml-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Login
                                        </Link>                                
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}