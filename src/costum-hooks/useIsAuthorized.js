import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function useIsAuthorized(){
    
    const [loading, setLoading] = useState(true);
    
    const cookies = new Cookies();

    const navigate = useNavigate();
    const blacklist = ['/login', '/register'];
    const currentPath = window.location.pathname;

    useEffect(() => {
        axios.post('http://localhost:8000/authentication/token', {
            user_id: cookies.get('user_id'),
            session_id: cookies.get('session_id')
        })
        .then(res => {
            // User already logged in then:
            if((res.status === 200) && blacklist.includes(currentPath)){
                navigate('/dashboard')
            }
            setLoading(false);
        })
        .catch(err => {
            if(!blacklist.includes(currentPath)){
                navigate('/login')
            }
            console.error(err)
            setLoading(false);
        });
    }, []);

    return { loading }
}