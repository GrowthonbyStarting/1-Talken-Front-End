import { combineReducers } from "redux";
import tab from "./modules/tab";
import mentorsData from "./modules/mentors";
import portfoliosData from "./modules/portfolios";

export default combineReducers({
  tab,
  mentorsData,
  portfoliosData,
});
