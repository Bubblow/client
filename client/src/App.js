import React from 'react';
import Home from './pages/home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Question from './pages/Question';
import PostCreate from './pages/post/PostCreate';
import PostRead from './pages/post/PostRead';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/question" element={<Question />}></Route>
          {/* <PostCreate /> */}
          {/* <PostRead /> */}
        </Routes>
    </div>
  );
}

export default App;
