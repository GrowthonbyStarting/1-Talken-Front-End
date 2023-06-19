import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const clickHandler = (): void => {
    navigate("/api/resume");
  };

  return (
    <nav className="header">
      <div className="header_container">
        <div className="header_logo" onClick={() => navigate("/")}>
          LOGO
        </div>
        <button type="button" onClick={clickHandler} className="resume_button">
          내 이력서
        </button>
        <button type="button" onClick={clickHandler} className="mypage_button">
          마이 페이지
        </button>
      </div>
    </nav>
  );
}
