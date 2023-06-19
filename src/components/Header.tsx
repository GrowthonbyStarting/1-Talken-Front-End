import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const clickHandler = (): void => {
    navigate("/resume");
  };

  return (
    <nav className="header">
      <button type="button" onClick={clickHandler}>
        내 이력서
      </button>
    </nav>
  );
}
