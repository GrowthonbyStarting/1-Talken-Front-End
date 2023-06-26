import { useState, useEffect, useRef } from "react";
import DropdownButton from "./DropdownBtn";
import FeedbackContent from "./FeedbackContent";
import MentorList from "./MentorList";
import "../../../styles/pages/resume/feedback/SideContentBox.css";

export default function SideContentBox() {
  const [scrollY, setScrollY] = useState<number>(0);
  const feedbackRef = useRef<HTMLDivElement>(null);

  const scrollEvent = (): any => {
    window.addEventListener("scroll", () => {
      setScrollY((cur) => window.scrollY);
    });
  };

  const and = (): any => {
    if (feedbackRef.current !== null) {
      scrollY >= 201
        ? (feedbackRef.current.style.marginTop = "4.5rem")
        : (feedbackRef.current.style.marginTop = "20rem");
    }
  };

  useEffect(scrollEvent, []);
  useEffect(and, [scrollY]);

  return (
    <div className="SideContentBox" ref={feedbackRef}>
      <DropdownButton />
      <MentorList />
      <FeedbackContent />
    </div>
  );
}
