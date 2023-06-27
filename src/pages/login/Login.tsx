import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { kakaoAuthUrl } from "../../kakaoData";
import "../../styles/pages/login/Login.css";

export default function Login() {
  const loginHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = kakaoAuthUrl;
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
                <input type="email" placeholder="이메일을 입력해주세요" />
              </div>
            </form>
          </div>
          <div className="loginTrigger">
            <Link to="/users/signup" className="to_register">
              이메일로 계속하기
            </Link>
            <a href="">계정 정보를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
