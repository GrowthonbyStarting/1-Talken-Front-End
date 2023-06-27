import { Portfolios } from "../models/portfolios";

let initState: Portfolios[] = [];

initState = [
  {
    id: 1,
    project_name: "project name1",
    project_file: "pdf",
    project_type: "기타 프로젝트",
    project_period: "2022.11 ~ 진행중 (7개월)",
    project_contribution: 60,
  },
  {
    id: 2,
    project_name: "project name2",
    project_file: "pdf",
    project_type: "기타 프로젝트",
    project_period: "2022.08 ~ 2022.11 (4개월)",
    project_contribution: 30,
  },
  {
    id: 3,
    project_name: "project name3",
    project_file: "pdf",
    project_type: "기타 프로젝트",
    project_period: "2022.09 ~ 2023.03 (7개월)",
    project_contribution: 80,
  },
];

function portfoliosData(state = initState, action: any) {
  return state;
}

export default portfoliosData;
