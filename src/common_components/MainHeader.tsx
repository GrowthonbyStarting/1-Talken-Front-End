import { Link } from "react-router-dom";
import "../styles/commonComp/MainHeader.css";
import { useEffect, useState } from "react";

export default function MainHeader() {
  const [isLogined, setIsLogined] = useState<string | null>(
    window.sessionStorage.getItem("isLogined")
  );

  useEffect(() => {
    setInterval(() => {
      setIsLogined(window.sessionStorage.getItem("isLogined"));
    }, 300000);
  }, []);

  return (
    <div className="headerContainer">
      <div className="header_content">
        <Link to="/">
          <img
            src="/assets/images/logoWhite.webp"
            alt="로고 화이트"
            style={{ width: "103px", height: "24px" }}
          />
        </Link>
        {isLogined ? (
          <div className="MenuBtn">
            <Link to="/api/resume">내 이력서</Link>
            <Link to="/api/mypage">마이페이지</Link>
          </div>
        ) : (
          <Link to="/users/login">
            <div className="loginBtn">로그인 ∙ 회원가입</div>
          </Link>
        )}
      </div>
    </div>
  );
}
