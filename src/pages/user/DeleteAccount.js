import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = () => {
    const navigate = useNavigate();

    const handleDeleteAccount = async () => {
        if (window.confirm('정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            try {
                await axios.delete('http://127.0.0.1:8000/user/delete', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                localStorage.removeItem('isLogin');
                alert('계정이 성공적으로 삭제되었습니다.');
                navigate('/');
            } catch (error) {
                console.error(error);
                alert('계정 삭제에 실패했습니다.');
            }
        }
    };

    return (
        <div>
            <h3>회원 탈퇴</h3>
            <button onClick={handleDeleteAccount}>계정 삭제</button>
        </div>
    );
};

export default DeleteAccount;
