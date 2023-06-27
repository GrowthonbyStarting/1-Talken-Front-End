import { useEffect } from "react";
import "../../../styles/pages/resume/feed_component/Feed_topTab.css";

export default function Feed_topTab({
  projectId,
  selectedPortfolio,
}: {
  projectId: Object[];
  selectedPortfolio: Function;
}) {
  const sendSelectedPortfolio = (id: number): void => {
    selectedPortfolio(id);
  };

  return (
    <div className="Feed_topTab_container">
      <>
        <div className="Feed_tab_wrraper">
          <div className="Feed_tab_container">
            <div className="Feed_menu_container">
              {projectId.map((el: any, idx: number) => {
                return (
                  <label
                    className="Feed_tab_menu"
                    onClick={() => sendSelectedPortfolio(el.id)}
                    key={idx}
                  >
                    <input type="radio" name="radio" key={idx} />
                    <span className="Feed_name" key={el.id}>
                      {el.name}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
