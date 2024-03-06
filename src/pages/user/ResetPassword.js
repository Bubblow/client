import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state; // 이메일 주소를 state에서 추출

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://127.0.0.1:8000/user/reset_password', {
                email, // 이메일 주소를 요청에 포함
                new_password: newPassword // 사용자가 입력한 새로운 비밀번호
            });
            alert("비밀번호가 성공적으로 재설정되었습니다.");
            navigate('/login'); // 로그인 페이지로 이동
        } catch (error) {
            console.error(error);
            alert("비밀번호 재설정에 실패했습니다.");
        }
    };

    return (
        <div>
            <h2>비밀번호 재설정</h2>
            <form onSubmit={handleResetPassword}>
                <input 
                    type="password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)} 
                    placeholder="새 비밀번호"
                    required
                />
                <button type="submit">비밀번호 재설정</button>
            </form>
        </div>
    );
};

export default ResetPassword;