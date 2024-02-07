import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
    
        try {
            const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/user/login',
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response.data);

            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('isLogin', true);
            
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };    

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
