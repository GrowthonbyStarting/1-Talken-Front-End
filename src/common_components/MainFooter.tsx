import "../styles/commonComp/MainFooter.css";

export default function MainFooter() {
  return (
    <div className="footer_container">
      <div className="footer_content_box">
        <div className="footer_content">
          <div>
            <span className="list">회사소개</span>
            <span className="list">이용약관</span>
            <span className="list">개인정보 처리방침</span>
          </div>
          <div className="info">
            <p>
              주식회사 모밋 | 대표이사 : 김홍찬 | 사업자 등록번호 : 313-88-02066
            </p>
            <p>
              대표번호 : 1688-7360 | 고객센터 운영시간 : 10:00 ~ 18:00 |
              통신판매번호 : 2022-서울중구-0936
            </p>
            <p>
              직업정보제공사업신고 : 서울청 제 2023-2호 | 본사·연구소 : 서울
              중구 을지로 50 스파크플러스 17층
            </p>
          </div>
        </div>
        <span>© 2023 MOMIT Inc. All Rights Reserved. </span>
      </div>
    </div>
  );
}
