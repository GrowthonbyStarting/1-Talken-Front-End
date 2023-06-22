import MentorList from "./MentorList";
import FeedbackConBox from "./FeedbackConBox";
import DropDownBtn from "./DropDownBtn";

export default function SideContent() {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "5vw",
      }}
    >
      <DropDownBtn />
      <MentorList />
      <FeedbackConBox />
    </div>
  );
}
