import { combineReducers } from "redux";
import tab from "./modules/tab";
import checkLogined from "./modules/login";

export default combineReducers({
  tab,
  checkLogined,
});
