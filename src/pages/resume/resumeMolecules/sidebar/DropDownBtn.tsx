import { useState, useRef } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./DropDownBtn.css";

export default function DropDownBtn() {
  const [initName, setInitName] = useState<string>("포트폴리오");
  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = [
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
    useRef<HTMLLIElement>(null),
  ];

  const labelHandler = (idx: number) => {
    const selectedMenu = menuRef[idx].current?.textContent;
    if (selectedMenu) {
      setInitName(selectedMenu);
    } else {
      setInitName("");
    }
  };

  return (
    <div className="container">
      <input type="checkbox" id="dropdown" />
      <label htmlFor="dropdown" className="dropdownLabel">
        <div>{initName}</div>
        <AiOutlineDown className="icon" />
      </label>
      <div className="content" ref={contentRef}>
        <ul>
          <li onClick={(): void => labelHandler(0)} ref={menuRef[0]}>
            포트폴리오
          </li>
          <li onClick={(): void => labelHandler(1)} ref={menuRef[1]}>
            이력서
          </li>
          <li onClick={(): void => labelHandler(2)} ref={menuRef[2]}>
            자기소개서
          </li>
        </ul>
      </div>
    </div>
  );
}
