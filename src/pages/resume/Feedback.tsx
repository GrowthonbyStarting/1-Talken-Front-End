import { useSelector } from "react-redux";
import Feed_Portfolio from "./feed_component/Feed_Portfolio";
import Feed_topTab from "./feed_component/Feed_topTab";
import { useEffect, useState } from "react";

export default function Feedback() {
  const portfoliosData = useSelector((state: any) => state.portfoliosData);
  const [projectId, setProjectId] = useState<Object[]>([]);
  const [selected, setSelected] = useState(1);

  const selectedPortfolio = (num: number): void => {
    setSelected((cur: number) => num);
  };

  useEffect(() => {
    for (let item of portfoliosData) {
      let tempObj = { id: 0, name: "" };
      tempObj.id = item.id;
      tempObj.name = item.project_name;
      setProjectId((cur) => [...cur, tempObj]);
    }
  }, []);

  return (
    <>
      <Feed_topTab
        projectId={projectId}
        selectedPortfolio={selectedPortfolio}
      />
      {portfoliosData.map((item: any, idx: number) => {
        if (item.id === selected)
          return (
            <div key={idx}>
              <Feed_Portfolio data={item} />
            </div>
          );
      })}
    </>
  );
}
