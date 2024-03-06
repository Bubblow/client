import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/user/logout');
            localStorage.removeItem('isLogin');
            console.log(response.data);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
