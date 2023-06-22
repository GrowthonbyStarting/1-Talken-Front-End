import { useState } from "react";
import { useDispatch } from "react-redux";
import "./TabButton.css";

export default function TabButton() {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul className="tab">
        <li>
          <button
            onClick={() => {
              dispatch({ type: "포트폴리오" });
            }}
          >
            포트폴리오
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch({ type: "이력서" });
            }}
          >
            이력서
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch({ type: "자기소개서" });
            }}
          >
            자기소개서
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              dispatch({ type: "피드백보기" });
            }}
          >
            피드백보기
          </button>
        </li>
      </ul>
    </nav>
  );
}
