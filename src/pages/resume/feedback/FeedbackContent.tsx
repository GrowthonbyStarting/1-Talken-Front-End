import { useSelector } from "react-redux";
import { Mentors } from "../../../store/models/mentors";
import "../../../styles/pages/resume/feedback/FeedbackContent.css";

export default function FeedbackContent() {
  const feedbackData = useSelector((state: any) => state.mentorsData.data);

  return (
    <div className="FeedbackContent_container">
      <div className="FeedbackContent_box">
        {feedbackData.map((item: Mentors, idx: number) => {
          return (
            <div className="FeedbackContent" key={idx}>
              <div className="mentor_info">
                <span className="mentor_img">
                  <img src="" alt="" />
                </span>
                <span className="mentor_name">{item.name}</span>
              </div>
              <div className="feedback_box">
                <div className="mentor_feedback">{item.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
