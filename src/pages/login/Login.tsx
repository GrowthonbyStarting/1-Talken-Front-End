import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { kakaoAuthUrl } from "../kakaoLoginData";
import "./Login.css";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  // 이메일, 비밀번호 확인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 유효성 검사
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  // 이메일 컨트롤 //
  const handleEmail = (e: any) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 😢");
      setEmailValid(false);
    } else {
      setEmailMessage("올바른 이메일 형식이에요 😊");
      setEmailValid(true);
    }
  };
  // 비밀번호 컨트롤 //
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    const passwordCurrent = e.target.value;
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요 😢"
      );
      setPwValid(false);
    } else {
      setPasswordMessage("안전한 비밀번호에요 😊");
      setPwValid(true);
    }
  };
  //백엔드에 로그인 정보 보내기
  const sendData = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "login" });
    // axios
    //   .post(`serverUrl`, {
    //     email: email,
    //     password: password,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //     window.localStorage.setItem("token", result.data.token);
    //     navigate("/");
    //     dispatch({ type: "login" });
    //   });
  };

  return (
    <>
      <div className="login__box">
        <h1>로그인</h1>
        <form>
          <div className="mt-3 id">
            <label className="mb-2" htmlFor="input-email"></label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmail}
              id="input-email"
              placeholder="이메일을 입력하세요"
              required
            />
            {email.length > 0 && (
              <div
                className={`message ${emailValid ? "success" : "error"}`}
                id="emailMsg"
              >
                {emailMessage}
              </div>
            )}
          </div>
          <div className="mt-3 password">
            <label className="mb-2" htmlFor="input-pw"></label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              placeholder="비밀번호를 입력하세요"
              required
            />
            {password.length > 0 && (
              <div
                className={`message ${pwValid ? "success" : "error"}`}
                id="passwordMsg"
              >
                {passwordMessage}
              </div>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4 password">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={sendData}
              disabled={!(emailValid && pwValid)}
            >
              로그인
            </button>
          </div>
        </form>

        <Link to="/register">
          <span className="registerFont">회원가입</span>
        </Link>
        <span className="loginFont">카카오 로그인</span>
        <img
          src="images\kakaoImg.png"
          alt="카카오 로그인"
          className="kakaoLogin"
          onClick={() => {
            // window.location.href = kakaoAuthUrl;
          }}
        />
      </div>
    </>
  );
}
