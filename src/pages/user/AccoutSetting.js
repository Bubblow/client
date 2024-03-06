import React from 'react';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import { useNavigate } from 'react-router-dom';



const AccountSetting = () => {
    const navigate = useNavigate();

    const goTochange = () => {
        navigate('/change-password');
    };
    const goTodelete = () => {
        navigate('/delete'); // 계정 설정 페이지로 이동
    };

    return (
        <div>
            <h2>계정 설정</h2>
            <button onClick={goTochange}>비밀번호 변경</button>
            <br></br>
            <button onClick={goTodelete}>회원 탈퇴</button>
        </div>
    );
};

export default AccountSetting;



