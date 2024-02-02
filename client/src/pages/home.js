import { Link } from "react-router-dom"
import React from 'react';

export default function Home(){
    const isLogin = localStorage.getItem('isLogin') === 'true';
    return(
        <div>
            <h1>Home</h1>
            <p><Link to="/education">교육관련페이지</Link></p>
            {!isLogin?(
                <>
                    <p><Link to="/signup">signup</Link></p>
                    <p><Link to="/login">login</Link></p>
                </>
            ) : (
                <>
                <p><Link to="/mypage">마이페이지</Link></p>
                <p><Link to="/question">question</Link></p>
                <p><Link to="/logout">logout</Link></p>
                </>
            )}
        </div>
    );
}