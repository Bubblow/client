import React, { useState } from 'react';
import axios from 'axios';

const Question = () => {
    const [link, setLink] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/question/create', {
                link
            });
            console.log(response.data);
            setContent(response.data.content);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Question</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="링크를 입력하세요" />
                <button type="submit">검색</button>
            </form>
            {content && <div><h3>분석 결과:</h3><p>{content}</p></div>}
        </div>
    );
};

export default Question;
