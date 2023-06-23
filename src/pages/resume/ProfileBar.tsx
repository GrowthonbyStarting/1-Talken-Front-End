import "../../styles/pages/resume/ProfileBar.css";

export default function ProfileBar() {
  return (
    <div className="profile_container">
      <div className="profile_bar">
        <div className="profile_bar_image"></div>
        <div className="profile_bar_name">{"양재연"}</div>
        <div className="profile_bar_job">{"IT·인터넷 · 프론트엔드"}</div>
        <div className="profile_bar_borderline"></div>
        <div className="profile_bar_contact">
          <h3>연락처</h3>
          <div className="contact">
            <div className="phone">{"010-5002-9433"}</div>
            <div className="email">{"yjey12@naver.com"}</div>
          </div>
        </div>
        <div className="job_box">
          <h3>키워드</h3>
        </div>
        <div className="profile_bar_hashtag">
          <span>
            <span className="hash_tag">{"#1"}</span>
          </span>
          <span>
            <span className="hash_tag">{"#2"}</span>
          </span>
          <span>
            <span className="hash_tag">{"#3"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
