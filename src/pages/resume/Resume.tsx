import { useSelector } from "react-redux";
import Header from "../../common_components/Header";
import "../../styles/pages/resume/Resume.css";
import ProfileBar from "./ProfileBar";
import TabBtn from "./TabBtn";
import Portfolio from "./Portfolio";
import MyResume from "./MyResume";
import Jasoseo from "./Jasoseo";
import Feedback from "./Feedback";

export default function Resume() {
  const tabNum = useSelector((state: any) => state?.tab);

  const tabHandler = () => {
    if (tabNum === 1) return <Portfolio />;
    if (tabNum === 2) return <MyResume />;
    if (tabNum === 3) return <Jasoseo />;
    if (tabNum === 4) return <Feedback />;
  };

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
          {tabHandler()}
        </div>
      </div>
    </div>
  );
}
