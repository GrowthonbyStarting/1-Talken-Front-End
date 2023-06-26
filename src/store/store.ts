import { combineReducers } from "redux";
import tab from "./modules/tab";
import checkLogined from "./modules/login";
import mentorsData from "./modules/mentors";

export default combineReducers({
  tab,
  checkLogined,
  mentorsData,
});
