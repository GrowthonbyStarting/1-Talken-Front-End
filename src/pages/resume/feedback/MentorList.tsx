import "../../../styles/pages/resume/feedback/MentorList.css";

export default function MentorList() {
  let mentors = ["mentor1", "mentor2", "mentor3", "mentor4"];
  return (
    <div className="mentor_list">
      {mentors.map((el, idx) => {
        return (
          <div key={idx} className="mentor">
            <span className="mentor_img">
              <img src="" alt="" />
            </span>
            <div className="mentor_info">
              <span className="mentor_name">{el}</span>
              <span className="mentor_career">경력 n년차</span>
            </div>
          </div>
        );
      })}
      {mentors.length >= 4 ? <button className="more">더 보기</button> : null}
    </div>
  );
}
