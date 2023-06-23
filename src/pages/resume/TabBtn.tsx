import { useDispatch } from "react-redux";
import "../../styles/pages/resume/TabBtn.css";

export default function TabBtn() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="tab_container">
        <div
          className="tab_menu"
          onClick={() => dispatch({ type: "포트폴리오" })}
        >
          포트폴리오
        </div>
        <div className="tab_menu" onClick={() => dispatch({ type: "이력서" })}>
          이력서
        </div>
        <div
          className="tab_menu"
          onClick={() => dispatch({ type: "자기소개서" })}
        >
          자기소개서
        </div>
        <div
          className="tab_menu"
          onClick={() => dispatch({ type: "피드백보기" })}
        >
          피드백 보기
        </div>
      </div>
      <div className="wrapper">
        <div className="border_line"></div>
      </div>
    </>
  );
}
