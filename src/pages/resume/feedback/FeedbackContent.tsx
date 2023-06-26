import "../../../styles/pages/resume/feedback/FeedbackContent.css";

export default function FeedbackContent() {
  let feedbackData = [
    { name: "mentor name1", comment: "bla bla bla1" },
    { name: "mentor name2", comment: "bla bla bla2" },
  ];
  return (
    <div className="FeedbackContent_container">
      <span>
        <p>피드백 내용</p>
      </span>
      <div className="FeedbackContent_box">
        {feedbackData.map((item, idx) => {
          return (
            <div className="FeedbackContent" key={idx}>
              <span className="mentor_name">{item.name}</span>
              <div className="mentor_feedback">{item.comment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
