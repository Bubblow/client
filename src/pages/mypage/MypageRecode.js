import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function getFirstChars(text) {
    return text.substring(0, 30);
}

const MypageRecord = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [results, setResults] = useState([]);
    const [editMode, setEditMode] = useState(false); // 편집 모드 상태
    const [editedUsername, setEditedUsername] = useState(''); // 편집된 닉네임 상태

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/mypage/record', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setEmail(response.data.email);
                setUsername(response.data.username);
                setResults(response.data.results); 
                setEditedUsername(response.data.username);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const goToAccountSettings = () => {
        navigate('/account'); // 계정 설정 페이지로 이동
    };

    const handleNicknameChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put('http://127.0.0.1:8000/mypage/edit',
                { username: editedUsername },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
            setUsername(editedUsername);
            setEditMode(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>My Page</h2>
            <p>Email: {email}</p>
            <p>Nickname: {
                editMode ? (
                    <input
                        type="text"
                        value={editedUsername}
                        onChange={(e) => setEditedUsername(e.target.value)}
                    />
                ) : (
                    username
                )
            }</p>
            {editMode ? (
                <button onClick={handleNicknameChange}>수정 완료</button>
            ) : (
                <button onClick={handleEditToggle}>닉네임 수정하기</button>
                
            )}
            <br></br>
            <button onClick={goToAccountSettings}>계정 설정</button>

            {results.map((record, index) => ( 
                <div key={index}>
                    <p>번호: {index + 1}</p>
                    <p><a href={record.link}>{record.link}</a></p>
                    <p>제목: {record.title}</p> 
                    <p>내용: {getFirstChars(record.content)}...</p> 
                    <p>분석 결과: {record.analysis_result}</p> 
                </div>
            ))}
        </div>
    );
};

export default MypageRecord;





