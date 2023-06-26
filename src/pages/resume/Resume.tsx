import { useSelector } from "react-redux";
import Header from "../../common_components/Header";
import "../../styles/pages/resume/Resume.css";
import ProfileBar from "./ProfileBar";
import TabBtn from "./TabBtn";
import Portfolio from "./Portfolio";
import MyResume from "./MyResume";
import Jasoseo from "./Jasoseo";
import Feedback from "./Feedback";
import SideContentBox from "./feedback/SideContentBox";

export default function Resume() {
  const tabNum = useSelector((state: any) => state?.tab);

  const tabHandler = () => {
    if (tabNum === 1) return <Portfolio />;
    if (tabNum === 2) return <MyResume />;
    if (tabNum === 3) return <Jasoseo />;
    if (tabNum === 4) return <Feedback />;
  };

  return (
    <>
      <Header />
      <div className="view_background"></div>
      <div className="view_container">
        <div className="profilebar_Wrapper">
          <ProfileBar />
        </div>
        <div className="view_content_container">
          <div className="content_box">
            <div className="tab_btn_wrapper">
              <TabBtn />
            </div>
            {tabHandler()}
          </div>
        </div>
        {tabNum === 4 ? (
          <div className="sidecontent_container">
            <SideContentBox />
          </div>
        ) : null}
      </div>
    </>
  );
}
