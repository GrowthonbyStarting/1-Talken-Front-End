import React, { useState } from "react";
import "../../../styles/pages/resume/feedback/DropdownBtn.css";

const DropdownButton = () => {
  const [tabName, setTabName] = useState("포트폴리오");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="dropdown"
      style={{ position: "absolute", right: "5vw", top: "70vh" }}
    >
      <button className="dropdown-button" onClick={toggleDropdown}>
        {tabName}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>포트폴리오</li>
          <li>이력서</li>
          <li>자기소개서</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
