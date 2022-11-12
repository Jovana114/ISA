// import React from 'react'

// export default function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }


import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Dashboard = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const userData= JSON.parse(sessionStorage.getItem('user')!);

                setName(userData.firstname);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);

    const logout = async () => {
        // await axios.post(process.env.REACT_APP_API_URL +'logout', {}, {withCredentials: false});
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <div className="form-signin mt-5 text-center">
        <h3>Hi {name}</h3>

        <button className="btn btn-lg btn-primary"
           onClick={logout}
        >Logout</button>
    </div>
}
