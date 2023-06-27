import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pages/login/Register.css";

const RegisterBox = () => {
  const [emailValue, setEmailValue] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    //백에 post요청 이후 회원가입이 성공하면 페이지 이동 처리하는 로직 구역
    //------
    navigate("/users/signup/selection");
  };

  useEffect(() => {
    let prevEmail: string | null = window.localStorage.getItem("email");
    if (prevEmail !== null) {
      setEmailValue(prevEmail);
    }
  }, []);

  return (
    <div className="register_container">
      <div className="register_heading">
        <Link to="/users/login">
          <img src="\assets\images\keyboard_control_key.png" alt="뒤로가기" />
        </Link>
        <span>회원가입</span>
      </div>
      <form action="/">
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" value={emailValue} disabled />
        <label htmlFor="name">이름</label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          required
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          required
        />
        <label htmlFor="repassword">비밀번호 재입력</label>
        <input
          type="password"
          name="repassword"
          placeholder="비밀번호를 다시 입력해주세요"
          required
        />
        <div className="agree_box">
          <div className="check_box_first">
            <input type="checkbox" name="first" />
            <span>모두 동의하기</span>
          </div>
          <div className="borderline"></div>
          <div className="check_box_second">
            <input type="checkbox" name="second" required />
            <label htmlFor="second">개인정보 수집 및 이용동의 (필수)</label>
          </div>
        </div>
        <button className="submit_btn" onClick={submitHandler}>
          다음
        </button>
      </form>
    </div>
  );
};

export default RegisterBox;
