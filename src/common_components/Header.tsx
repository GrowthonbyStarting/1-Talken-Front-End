import { useEffect, useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY((cur) => window.scrollY);
    });
  }, []);

  return (
    <nav className="header">
      <div className="header_container">
        <div
          className="header_box"
          style={
            scrollY === 0
              ? { background: "none" }
              : { backgroundColor: "white" }
          }
        >
          <div className="header_logo" onClick={() => navigate("/")}>
            {scrollY === 0 ? (
              <img src="/images/logoWhite.webp" alt="logoWhite" />
            ) : (
              <img src="/images/logo.png" alt="logoBlack" />
            )}
          </div>
          <Link
            to={"/api/resume"}
            className="resume_button"
            style={scrollY === 0 ? { color: "white" } : { color: "black" }}
          >
            내 이력서
          </Link>
          <Link
            to={"/api/mypage"}
            className="mypage_button"
            style={scrollY === 0 ? { color: "white" } : { color: "black" }}
          >
            마이 페이지
          </Link>
        </div>
      </div>
    </nav>
  );
}
