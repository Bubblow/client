import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/signup', {
                email,
                name: username,
                password
            });
            console.log(response.data);
            navigate("/login");

        } catch (error) {
            if(error.response && error.response.status === 409 ){
                setErrorMessage('이미 존재하는 이메일입니다.');
            } 
            if(error.response && error.response.status === 422){
                setErrorMessage('비밀번호는 8자리 이상 영문과 숫자를 포함하여 작성해 주세요.');
            }
            else {
            // 기타 에러 처리
            setErrorMessage('회원가입 중 오류가 발생했습니다.');
            }
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
