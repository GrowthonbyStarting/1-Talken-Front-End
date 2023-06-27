import "../../../styles/pages/resume/feed_component/Feed_topTab.css";

export default function Feed_topTab() {
  return (
    <div className="Feed_topTab_container">
      <>
        <div className="Feed_tab_wrraper">
          <div className="Feed_tab_container">
            <div className="Feed_menu_container">
              <label className="Feed_tab_menu">
                <input type="radio" name="radio" />
                <span className="Feed_name">포트폴리오1</span>
              </label>
              <label className="Feed_tab_menu">
                <input type="radio" name="radio" />
                <span className="Feed_name">포트폴리오2</span>
              </label>
              <label className="Feed_tab_menu">
                <input type="radio" name="radio" />
                <span className="Feed_name">포트폴리오3</span>
              </label>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
