import styled from "styled-components";

const MyContainer = styled("div")`
  position: absolute;
  right: 3vw;
  top: 40vh;
  width: 70vw;
  height: 100%;
  border: 1px solid black;
`;

export default function ContentSection() {
  return (
    <MyContainer>
      <div>container</div>
    </MyContainer>
  );
}
