import React, { useState } from 'react';
import axios from 'axios';

const EditMypage = ({ currentUsername, onUsernameUpdated }) => {
    const [username, setUsername] = useState(currentUsername); 

    const handleNicknameChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://127.0.0.1:8000/mypage/edit',
                { username },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
            onUsernameUpdated(username);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleNicknameChange}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <button type="submit">수정하기</button>
            </form>
        </div>
    );
};

export default EditMypage;
