import { useState } from "react";
import styled from "styled-components";

const MyNav = styled("ul")`
  display: flex;
  width: 50%;
  justify-content: space-between;
  color: black;
`;

export default function TabButton() {
  return (
    <nav>
      <MyNav>
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
      </MyNav>
    </nav>
  );
}
