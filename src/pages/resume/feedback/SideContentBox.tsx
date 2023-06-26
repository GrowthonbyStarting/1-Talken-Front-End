import DropdownButton from "./DropdownBtn";
import FeedbackContent from "./FeedbackContent";
import MentorList from "./MentorList";

export default function SideContentBox() {
  return (
    <div className="SideContentBox">
      <DropdownButton />
      <MentorList />
      <FeedbackContent />
    </div>
  );
}
