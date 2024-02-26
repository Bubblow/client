import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageRecord = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [link, setLink] = useState([]);
    const [result, setResult] = useState([]);    

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
                setLink(response.data.links);
                setResult(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>불러오기</h2>
            <p>Email: {email}, 닉네임: {username}</p>
            {link.map((l, index) => (
                <p key={index}>번호: {index + 1}, 링크: {l}, 결과: {result[index]}</p>
            ))}
        </div>
    );
};

export default MypageRecord;
