import React from 'react';
import Home from './pages/home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Analysis from './pages/Analysis';
import { Routes, Route } from 'react-router-dom';
import MypageRecord from './pages/mypage/MypageRecode';
import Education from './pages/education';
import Model from './pages/model';
import Question from './pages/Question';
import Answer from './pages/answer';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/question" element={<Analysis />}></Route>
          <Route path="/answer" element={<Answer />}></Route>
          <Route path="/mypage" element={<MypageRecord />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/model" element={<Model />}></Route>
          {/* <PostCreate /> */}
          {/* <PostRead /> */}
        </Routes>
    </div>
  );
}

export default App;
