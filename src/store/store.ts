import { combineReducers } from "redux";
import tab from "./modules/tab";
import mentorsData from "./modules/mentors";
import portfoliosData from "./modules/portfolios";
import descriptionDetail from "./modules/project_content";

export default combineReducers({
  tab,
  mentorsData,
  portfoliosData,
  descriptionDetail,
});
