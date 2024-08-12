import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'universal-cookie';
import axios from 'axios';

export default function Navbar() {

    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        initFlowbite();
    });

    function logoutHandler(e){
        e.preventDefault();

        axios.post('http://localhost:8000/logout', {
            user_id: cookies.get('user_id')
        })
        .then(res => {
            console.log(res)
            cookies.remove('user_id')
            cookies.remove('session_id')
            navigate('/login')
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <header className="antialiased">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-end items-center">
                    <div className="flex items-center lg:order-2">
                        <button 
                            type="button"
                            className="flex mx-3 text-sm bg-gray-200 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 overflow-hidden w-8 h-8" 
                            id="user-menu-button" 
                            aria-expanded="false" 
                            data-dropdown-toggle="dropdown"
                        >
                            <span className="sr-only">Open user menu</span>
                            <FontAwesomeIcon icon={faUser} className='w-4 h-4 m-auto text-gray-400'/>
                        </button>
                        <div className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                            <div className="py-3 px-4">
                                <span className="block text-sm font-semibold text-gray-900 dark:text-white">User</span>
                            </div>
                            <ul className="py-1 text-gray-500 dark:text-gray-400" aria-labelledby="dropdown">
                                <li>
                                    <button
                                        onClick={(e) => logoutHandler(e)}
                                        className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}