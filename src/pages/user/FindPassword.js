// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FindPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://127.0.0.1:8000/user/find_password', { email });
            // 인증 코드 입력 페이지로 이동하면서 이메일 주소 전달
            navigate('/verify-code', { state: { email } });
        } catch (error) {
            console.error(error);
            alert("인증 코드 요청 실패. 다시 시도해주세요.");
        }
    };

    return (
        <div>
            <h2>비밀번호 찾기</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="이메일 주소"
                    required 
                />
                <button type="submit">인증 코드 받기</button>
            </form>
        </div>
    );
};

export default FindPassword;
