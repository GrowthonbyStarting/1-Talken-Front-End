import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/commonComp/Header.css";

export default function Header() {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY((cur) => window.scrollY);
    });
  }, []);

  return (
    <div
      className="headerContainer"
      style={
        scrollY === 0 ? { background: "none" } : { backgroundColor: "white" }
      }
    >
      <div className="header_content">
        <Link to="/">
          <img
            src={`/assets/images/${
              scrollY === 0 ? "logowhite.webp" : "logo.png"
            }`}
            alt="로고 화이트"
            style={{ width: "103px", height: "24px" }}
          />
        </Link>
        <div className="MenuBtn">
          <Link
            to="/api/resume"
            style={scrollY === 0 ? { color: "white" } : { color: "black" }}
          >
            내 이력서
          </Link>
          <Link
            to="/api/mypage"
            style={scrollY === 0 ? { color: "white" } : { color: "black" }}
          >
            마이페이지
          </Link>
        </div>
      </div>
    </div>
  );
}
