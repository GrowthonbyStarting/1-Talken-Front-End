import { useSelector } from "react-redux";
import Header from "../../common_components/Header";
import "../../styles/pages/resume/Resume.css";
import ProfileBar from "./ProfileBar";
import TabBtn from "./TabBtn";

export default function Resume() {
  const tabNum = useSelector((state: any) => state?.tab);
  return (
    <div className="view_container">
      <Header />
      <div className="view_background"></div>
      <div className="view_content_container">
        <div className="profilebar_Wrapper">
          <ProfileBar />
        </div>
        <div className="content_box">
          <div className="tab_btn_wrapper">
            <TabBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
