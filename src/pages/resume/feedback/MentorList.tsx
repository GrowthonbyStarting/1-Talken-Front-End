import { useSelector } from "react-redux";
import "../../../styles/pages/resume/feedback/MentorList.css";
import { Mentors } from "../../../store/models/mentors";

export default function MentorList() {
  const mentorsData = useSelector((state: any) => state.mentorsData);
  const mentors = [...mentorsData.data];
  return (
    <div className="mentor_list">
      {mentors.splice(0, 3).map((el: Mentors, idx: number) => {
        return (
          <div key={idx} className="mentor">
            <span className="mentor_img">
              <img src="" alt="" />
            </span>
            <div className="mentor_info">
              <span className="mentor_name">{el.name}</span>
              <span className="mentor_career">경력{el.career}년</span>
            </div>
          </div>
        );
      })}
      {mentorsData.data.length > 3 ? (
        <button className="more">더 보기</button>
      ) : null}
    </div>
  );
}
