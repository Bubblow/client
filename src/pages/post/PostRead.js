import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostRead = () => {
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/post/read');
                const titles = response.data.map(item => item.title);
                const contents = response.data.map(item => item.content);
                setTitle(titles);
                setContent(contents);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    

    return(
        <div>
        <h2>불러오기</h2>
        {title.map((t, index) => (
            <p key={index}>제목: {t}</p>
        ))}
        
        {content.map((c, index) => (
            <p key={index}>내용: {c}</p>
        ))}

    </div>
    );

};

export default PostRead;

