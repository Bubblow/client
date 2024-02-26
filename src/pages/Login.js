import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // username을 email로 변경
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // URLSearchParams를 사용하여 form data를 생성합니다.
        const formData = new URLSearchParams();
        formData.append('username', email); // 여기서 username 필드에 이메일 값을 사용합니다.
        formData.append('password', password);
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login', formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
    
            console.log(response.data);
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('isLogin', true);
            
            navigate('/');
        } catch (error) {
            console.error(error);
            // 에러 처리 로직을 추가하세요. 예를 들어, 사용자에게 오류 메시지를 보여줄 수 있습니다.
        }
    };
        

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
