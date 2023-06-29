import { ProjectContent } from "../models/projectCon";

let initState: ProjectContent[] = [];

initState = [
  {
    content_id: 1,
    title: "프로젝트 준비 배경",
    detail:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sunt suscipit eaque a sequi dicta veritatis velit nostrum, ducimus assumenda molestias qui maiores earum reprehenderit facilis at perferendis debitis libero!",
  },
  {
    content_id: 2,
    title: "프로젝트 성과",
    detail: "Lorem ipsum dolor sit, a!",
  },
  {
    content_id: 3,
    title: "개선점 및 아쉬운점",
    detail:
      "Lorem ipsum dolor sit, a!ipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, aipsum dolor sit, a",
  },
];

function descriptionDetail(state: Object[], action: any) {
  return state;
}

export default descriptionDetail;
