import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] =useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/post/create',{
                title,
                content
            });
            console.log(response.data)
        } catch(error){
            console.error(error);
        }
    };

    return(
        <div>
            <h2>게시판</h2>
            <form onSubmit={handleSubmit}>
                <input type="title" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="title" />
                <input type="content" value={content} onChange={(e)=> setContent(e.target.value)} placeholder='content' />
                <button type="submit">글쓰기</button>
            </form>
        </div>

    );
};

export default PostCreate;