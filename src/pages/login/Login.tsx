import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { kakaoAuthUrl } from "../../kakaoData";
import "../../styles/pages/login/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  // 오류 메세지
  const [emailMessage, setEmailMessage] = useState("");
  // 유효성 검사
  const [emailValid, setEmailValid] = useState(false);

  //입력 요소 컨트롤
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const loginHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = kakaoAuthUrl;
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const loginOrSignUp = () => {
    if (emailRef.current?.value === "" || !emailValid) {
      window.alert("이메일을 다시 입력하여주세요!!");
    } else {
      // 가입된 이메일 있는지 백에서 확인, 있으면 비밀번호 입력창 : 없으면 회원가입 페이지로 보내는 로직
      //
      //없는 경우
      window.localStorage.setItem("email", `${emailRef.current?.value}`);
      navigate("/users/signup");
    }
  };

  return (
    <div className="login__StyledLoginSectionWrapper">
      <div className="LoginPage__StyledDescriptionWrapper">
        <div className="LoginPage__StyledBigTitle">
          세상에 없던 <br />
          이력서의 시작
        </div>
        <div className="LoginPage__StyledSmallTitle">
          나를 잘 표현한 이력서,
          <br />
          지금 바로 작성해보세요
        </div>
      </div>
      <div className="loginbox">
        <div className="loginform_wrapper">
          <a href="/" className="kakaologin_btn" onClick={loginHandler}>
            <img src="/assets/images/kakao.png" alt="카카오 로그인" />
          </a>
          <p>이메일 아이디가 있어도 카카오로 다시 시작할 수 있어요</p>
          <div className="dividingline">
            <hr />
            <span>또는</span>
          </div>
          <div className="inputContainer">
            <form action="submit">
              <div className="styledInputContainer">
                <input
                  name="email"
                  type="email"
                  placeholder={"이메일을 입력해주세요"}
                  onChange={handleEmail}
                  ref={emailRef}
                />
                <div className="label_container">
                  <label htmlFor="email">{emailMessage}</label>
                </div>
              </div>
            </form>
          </div>
          <div className="loginTrigger">
            <button className="to_register" onClick={loginOrSignUp}>
              이메일로 계속하기
            </button>
            <a href="">계정 정보를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
