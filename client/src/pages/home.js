import { Link } from "react-router-dom"
import React from 'react';

export default function Home(){
    const isLogin = localStorage.getItem('isLogin') === 'true';
    return(
        <div>
            <h1>Home</h1>
            {!isLogin?(
                <>
                    <p><Link to="/signup">signup</Link></p>
                    <p><Link to="/login">login</Link></p>
                </>
            ) : (
                <>
                <p><Link to="/question">question</Link></p>
                <p><Link to="/logout">logout</Link></p>
                </>
            )}
        </div>
    );
}