import React, {useState} from 'react';

import LoginDiv from '../../Style/UserCSS.js';
import firebase from "../../firebase.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Register() {

  
    console.log("Register Start........" );


    const[Name, setName] = useState("");
    const[Email, setEmail] = useState("");
    const[PW, setPW] = useState("");
    const[PWConfirm, setPWConfirm] = useState("");

    let navigate = useNavigate();

    const RefisterFunc = async (e) => {
      e.preventDefault();
      if(!(Name && Email && PW && PWConfirm)) {
        return alert("모든 값을 채워주세요!");
      }
      if(PW != PWConfirm) {
        return alert("비밀번호와 비밀번호 확인 값은 같아야 합니다.");
      }


 
 

    console.log("createUserWithEmailAndPassword  Start........" );
    let createdUser = await firebase.auth().createUserWithEmailAndPassword(Email, PW);
    console.log("createUserWithEmailAndPassword  End ........" );
     


     await createdUser.user.updateProfile({
        displayName: Name,
     });

      console.log(createdUser.user);

      let body = {
        email : createdUser.user.multiFactor.user.email,
        displayName : createdUser.user.multiFactor.user.displayName,
        uid : createdUser.user.multiFactor.user.uid,
      };
      axios.post("/api/user/register", body).then((response) => {
        if(response.data.success){
          //회원가입 성공시
          navigate("/login");
        }else{
          //회원가입 실패시
          return alert("회원가입이 실패하였습니다.");
        }
      });
    };

  return (
    <LoginDiv>
        <form>
            <label>이름</label>
            <input type="name"
                value={Name}
                onChange={(e) => setName(e.currentTarget.value)}/>
        <label>이메일</label>
        <input type="email"
                value={Email}
                onChange={(e) => setEmail(e.currentTarget.value)}/>
      <label>비밀번호</label>
      <input type="password"
                value={PW}
                minLength={8}
                onChange={(e) => setPW(e.currentTarget.value)}/>
      <label>비밀번호확인</label>
      <input type="password"
                value={PWConfirm}
                minLength={8}
                onChange={(e) => setPWConfirm(e.currentTarget.value)}/>
      <button onClick={(e) => RefisterFunc(e)}>회원가입</button>
        </form>
    </LoginDiv>

    /* <button onClick={(e) => {
        e.preventDefault();
        navigate("/register");
      }}>
      */
  );
}

export default Register;
