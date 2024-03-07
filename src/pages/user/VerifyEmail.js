import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const email = location.state.email;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/user/verify_email', {
                email, // 이메일 주소를 직접 사용
                verification_code: verificationCode,
            });
            console.log(response.data);
            navigate("/login"); // 인증 성공 시 로그인 페이지로 이동
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.detail) {
                setErrorMessage(error.response.data.detail);
            } else {
                setErrorMessage('알 수 없는 오류가 발생했습니다.');
            }
        }
    };

    return (
        <div>
            <h2>Email Verification</h2>
            <form onSubmit={handleSubmit}>
                {/* 이메일 입력 필드 제거 */}
                <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Verification Code"
                    required
                />
                <button type="submit">Verify Email</button>
            </form>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
};

export default VerifyEmail;
