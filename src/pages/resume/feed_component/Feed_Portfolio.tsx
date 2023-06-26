import { PDFViewer } from "@react-pdf/renderer";
import PdfViewer from "./PdfViewer";
import "../../../styles/pages/resume/feed_component/Feed_Portfolio.css";

export default function Feed_Portfolio() {
  return (
    <div className="Feed_Portfolio_container">
      <span className="project_name">{"project name 1"}</span>
      <PDFViewer width={600} height={300}>
        <PdfViewer />
      </PDFViewer>

      <div className="project_info">
        <div className="info_badge">
          <span>인원 뱃지</span>
          <span>역할 뱃지</span>
        </div>
        <div className="info_specific">
          <div className="info_specific_all">
            <span className="info_specific_top">유형</span>
            <span className="info_specific_bottom">기타 프로젝트</span>
          </div>
          <div className="info_specific_all">
            <span className="info_specific_top">기간</span>
            <span className="info_specific_bottom">
              2022.11 ~ 진행중(7개월)
            </span>
          </div>
          <div className="info_specific_all">
            <span className="info_specific_top">기여도</span>
            <span className="info_specific_bottom">기여도 60%</span>
          </div>
        </div>
      </div>
      <div className="project_description_container">
        <div>//</div>
      </div>
    </div>
  );
}
