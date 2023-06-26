import { useState, useRef } from "react";
import "../../../styles/pages/resume/feedback/DropdownBtn.css";

const DropdownButton = () => {
  const [tabName, setTabName] = useState<any>("포트폴리오");
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeName = (): void => {
    // if (listRef.current !== null) {
    //   setTabName((): any => listRef.current?.value);
    // }
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {tabName}
        <div>
          <img src="\assets\images\dropdown_btn_icon.png" alt="down_arrow" />
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li ref={listRef} onClick={changeName}>
            포트폴리오
          </li>
          <li ref={listRef} onClick={changeName}>
            이력서
          </li>
          <li ref={listRef} onClick={changeName}>
            자기소개서
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
