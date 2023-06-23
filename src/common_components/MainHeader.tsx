import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/commonComp/MainHeader.css";

export default function MainHeader() {
  const isLogined = useSelector((state: any) => state?.checkLogined);

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
