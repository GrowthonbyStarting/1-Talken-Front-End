import { PDFViewer } from "@react-pdf/renderer";
import PdfViewer from "./PdfViewer";
import "../../../styles/pages/resume/feed_component/Feed_Portfolio.css";
import { Portfolios } from "../../../store/models/portfolios";

export default function Feed_Portfolio({ data }: { data: Portfolios }) {
  return (
    <div className="Feed_Portfolio_container">
      <span className="project_name">{data.project_name}</span>
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
