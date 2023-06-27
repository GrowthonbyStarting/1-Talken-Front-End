import { useNavigate } from "react-router-dom";
import "../../styles/pages/login/TorOrT.css";

export default function TorOrT() {
  const navigate = useNavigate();
  return (
    <div className="selection_container">
      <div className="description">
        <span className="description_big">회원님의 유형을 선택해주세요!</span>
        <span className="description_small">
          멘토가 되면 신입/주니어 인재의 이력서를 조회하고, 피드백 할 수 있어요!
          채용 기회는 덤!
        </span>
      </div>
      <div className="selection_box">
        <div className="selection">
          <div className="selection_mentor">
            <span className="selection_mentor_big">멘토</span>
            <span className="selection_mentor_small">
              이력서 피드백을 해주고 싶어요.
            </span>
          </div>
          <div className="selection_mentee">
            <span className="selection_mentee_big">멘티</span>
            <span className="selection_mentee_small">이력서만 작성할래요.</span>
          </div>
        </div>
        <div className="selection_btn">
          <button
            onClick={() => {
              navigate("/api/resume");
              window.sessionStorage.setItem("isLogined", "true");
              setTimeout(() => {
                window.sessionStorage.clear();
              }, 600000);
            }}
          >
            이력서 쓰러가기
          </button>
        </div>
      </div>
    </div>
  );
}
