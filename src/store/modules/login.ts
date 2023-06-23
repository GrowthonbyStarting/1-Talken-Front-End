let isLogined = false;

function checkLogined(state = isLogined, action: any): boolean {
  if (action.type === "login") {
    state = true;
    return state;
  } else if (action.type === "logout") {
    state = false;
    return state;
  }
  return state;
}

export default checkLogined;
