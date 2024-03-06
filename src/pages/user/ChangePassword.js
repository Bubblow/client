import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://127.0.0.1:8000/user/edit_password', {
                current_password: currentPassword,
                new_password: newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            alert('비밀번호가 성공적으로 변경되었습니다.');
            navigate('/account');
        } catch (error) {
            console.error(error);
            alert('비밀번호 변경에 실패했습니다.');
        }
    };

    return (
        <div>
            <h3>비밀번호 변경</h3>
            <form onSubmit={handlePasswordChange}>
                <div>
                    <label>현재 비밀번호:</label>
                    <input 
                        type="password" 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <label>새 비밀번호:</label>
                    <input 
                        type="password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">비밀번호 변경</button>
            </form>
        </div>
    );
};

export default ChangePassword;
