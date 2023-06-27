import { PDFViewer } from "@react-pdf/renderer";
import PdfViewer from "./PdfViewer";
import { Portfolios } from "../../../store/models/portfolios";
import "../../../styles/pages/resume/feed_component/Feed_Portfolio.css";

export default function Feed_Portfolio({ data }: { data: Portfolios }) {
  return (
    <div className="Feed_Portfolio_container">
      <span className="project_name">{data.project_name}</span>
      <PDFViewer width={600} height={300}>
        <PdfViewer />
      </PDFViewer>

      <div className="project_info">
        <div className="info_badge">
          <span className="contributor_badge">팀 {6} 명</span>
          <span className="role_badge">{"디자인 총괄"}</span>
        </div>
        <div className="info_specific">
          <div className="info_specific_all">
            <span className="info_specific_top">유형</span>
            <span className="info_specific_bottom">{data.project_type}</span>
          </div>
          <div className="info_specific_all">
            <span className="info_specific_top">기간</span>
            <span className="info_specific_bottom">{data?.project_period}</span>
          </div>
          <div className="info_specific_all">
            <span className="info_specific_top">기여도</span>
            <span className="info_specific_bottom">
              기여도{data.project_contribution}%
            </span>
          </div>
        </div>
      </div>
      <div className="project_description_container">
        <div>//</div>
      </div>
    </div>
  );
}
