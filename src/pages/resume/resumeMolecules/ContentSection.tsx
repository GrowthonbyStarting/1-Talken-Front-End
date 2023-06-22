import styled from "styled-components";
import { useSelector } from "react-redux";
import Feedback from "./Feedback";
import Portfolio from "./Portfolio";
import MyResume from "./MyResume";
import Jasoseo from "./Jasoseo";

const MyContainer = styled("div")`
  position: absolute;
  right: 3vw;
  top: 50vh;
  width: 70vw;
  height: 100%;
  border-top: 1px solid black;
`;

export default function ContentSection() {
  const tabNum: any = useSelector((state: { tab: number }) => state.tab);

  const tabHandler = (tabNum: number) => {
    if (tabNum === 1) return <Portfolio />;
    if (tabNum === 2) return <MyResume />;
    if (tabNum === 3) return <Jasoseo />;
    if (tabNum === 4) return <Feedback />;
  };

  return <MyContainer>{tabHandler(tabNum)}</MyContainer>;
}
