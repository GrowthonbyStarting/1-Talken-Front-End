import { useState } from "react";
import "./TabButton.css";

export default function TabButton() {
  return (
    <nav>
      <ul className="tab">
        <li>
          <button onClick={() => {}}>포트폴리오</button>
        </li>
        <li>
          <button onClick={() => {}}>이력서</button>
        </li>
        <li>
          <button onClick={() => {}}>자기소개서</button>
        </li>
        <li>
          <button onClick={() => {}}>피드백보기</button>
        </li>
      </ul>
    </nav>
  );
}
