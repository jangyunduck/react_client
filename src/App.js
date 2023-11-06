import React, {useEffect} from "react";//useEffect추가됨
import logo from './logo.svg';
import './App.css';
import Test from "./Test";
import { Routes, Route} from "react-router-dom";
import Heading from "./Component/Heading";
//import List from "./Component/Post/List";//인강 에서 변경된것 안되면 복구
import MainPage from "./Component/MainPage";
import Upload from "./Component/Post/Upload";
//import Detail from "./Component/Post/Detail";
import Edit from "./Component/Post/Edit";

import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import PostArea from "./Component/Post/PostArea";
import { useDispatch } from "react-redux";//추가됨
import { loginUser, clearUser } from "./Reducer/userSlice.js";//추가됨
import firebase from "./firebase.js";//추가됨
function App() {

  const dispatch = useDispatch();
  //const user = useSelector((state) => state.user);
//20번부터 28번까지 추가됨
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) =>{
      console.log(userInfo);
      console.log("userInfo : ", userInfo);
      if(userInfo !== null){
        dispatch(loginUser(userInfo.multiFactor.user));
      }else{
        dispatch(clearUser());
      }
    });
  }, []);

  
  return (
    <>
    <Heading/>
    <Routes>

      <Route path="/" element={<MainPage/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/post/:postNum" element={<PostArea/>}/>
      <Route path="/edit/:postNum" element={<Edit/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>

      
      
    
  );
}

export default App;
