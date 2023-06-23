import { useDispatch } from "react-redux";
import "../../styles/pages/resume/TabBtn.css";

export default function TabBtn() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="tab_wrraper">
        <div className="tab_container">
          <div className="menu_container">
            <label
              className="tab_menu"
              onClick={() => dispatch({ type: "포트폴리오" })}
            >
              <input type="radio" name="radio" />
              <span className="name">포트폴리오</span>
            </label>
            <label
              className="tab_menu"
              onClick={() => dispatch({ type: "이력서" })}
            >
              <input type="radio" name="radio" />
              <span className="name">이력서</span>
            </label>
            <label
              className="tab_menu"
              onClick={() => dispatch({ type: "자기소개서" })}
            >
              <input type="radio" name="radio" />
              <span className="name">자기소개서</span>
            </label>
            <label
              className="tab_menu"
              onClick={() => dispatch({ type: "피드백보기" })}
            >
              <input type="radio" name="radio" />
              <span className="name">피드백보기</span>
            </label>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="border_line"></div>
      </div>
    </>
  );
}
