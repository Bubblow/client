import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Question = ({ onLinkSubmit }) => {
    const [link, setLink] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://127.0.0.1:8000/question/create', { link, 
            create_at: new Date().toISOString(),
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log(result.data.analysis_result);
            onLinkSubmit(); // 링크 제출 후 데이터 새로고침을 위한 함수 호출
            setLink(''); // 링크 입력 필드 초기화
            navigate('/answer', { state: { analysisResult: result.data.analysis_result, create_at: new Date().toISOString() } });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Submit a Link</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Enter a link" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Question;
