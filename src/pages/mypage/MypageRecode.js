import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MypageRecord = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [results, setResults] = useState([]); 

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
            {results.map((record, index) => ( 
                <div key={index}>
                    <p>번호: {index + 1}</p>
                    <p>링크: {record.link}</p>
                    <p>제목: {record.title}</p> 
                    <p>내용: {record.content}</p> 
                    <p>분석 결과: {record.analysis_result}</p> 
                </div>
            ))}
        </div>
    );
};

export default MypageRecord;
