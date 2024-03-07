// VerifyCode.js
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const VerifyCode = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state; // 이전 단계에서 전달받은 이메일 주소

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/verify_email', {
                email,
                verification_code: verificationCode,
            });

            if (response.data.detail === 'Email verified successfully' ) {
                navigate('/reset-password', { state: { email } });
            } else {
                alert("인증 코드가 유효하지 않습니다.");
            }
        } catch (error) {
            console.error(error);
            alert("인증 코드 검증 실패. 다시 시도해주세요.");
        }
    };

    return (
        <div>
            <h2>인증 코드 검증</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={verificationCode} 
                    onChange={(e) => setVerificationCode(e.target.value)} 
                    placeholder="인증 코드"
                    required 
                />
                <button type="submit">인증 코드 검증</button>
            </form>
        </div>
    );
};

export default VerifyCode;
