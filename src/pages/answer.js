import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Answer = () => {
    const location = useLocation();
    const { analysisResult, create_at } = location.state;

    const [score, setScore] = useState(1); // 점수 초기값을 1으로 설정
    const [content, setContent] = useState('');

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/feedback/send', {
                score,
                content,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            console.log('Feedback sent successfully:', response.data);
            setScore(1); // 폼 제출 후 점수를 초기화
            setContent(''); // 폼 제출 후 내용을 초기화
        } catch (error) {
            console.error('Error sending feedback:', error);
        }
    };

    return (
        <div>
            <h2>결과페이지</h2>
            <div><strong>생성 시간:</strong> {formatDate(create_at)}</div>
            <div><strong>분석 결과:</strong> {analysisResult}</div>
            
            <form onSubmit={handleSubmit}>
                <h3>피드백 제출</h3>
                <label>
                    점수 (1-5):
                    <input
                        type="number"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        min="1"
                        max="5"
                        step="1" // 점수를 정수 단위로 입력받음
                        required
                    />
                </label>
                <br/>
                <label>
                    건의사항:
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default Answer;
