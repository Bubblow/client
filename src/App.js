import React from "react";
import Home from "./pages/home";
import Bubblow from "./pages/bubblow";
import Signup from "./pages/user/Signup";
import Login from "./pages/user/Login";
import Logout from "./pages/user/Logout";
import Analysis from "./pages/question/Analysis";
import { Routes, Route } from "react-router-dom";
import MypageRecord from "./pages/mypage/MypageRecode";
import Education from "./pages/education";
import Model from "./pages/model";
import Answer from "./pages/answer";
import VerifyEmail from "./pages/user/VerifyEmail";
import EditMypage from "./pages/mypage/EditMypage";
import AccountSetting from "./pages/user/AccoutSetting";
import ChangePassword from "./pages/user/ChangePassword";
import DeleteAccount from "./pages/user/DeleteAccount";
import FindPassword from "./pages/user/FindPassword";
import ResetPassword from "./pages/user/ResetPassword";
import VerifyCode from "./pages/user/VerifyCode";
import MyHeader from "./components/MyHeader";
import "./App.css";
import "./styles/education.css";

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bubblow" element={<Bubblow />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/question" element={<Analysis />}></Route>
        <Route path="/answer" element={<Answer />}></Route>
        <Route path="/mypage" element={<MypageRecord />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/verify" element={<VerifyEmail />}></Route>
        <Route path="/model" element={<Model />}></Route>
        <Route path="/edit" element={<EditMypage />}></Route>
        <Route path="/account" element={<AccountSetting />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/delete" element={<DeleteAccount />}></Route>
        <Route path="/forgot-password" element={<FindPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/verify-code" element={<VerifyCode />}></Route>
      </Routes>
    </div>
  );
}

export default App;
