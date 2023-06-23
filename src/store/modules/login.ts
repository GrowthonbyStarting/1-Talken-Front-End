let isLogined = false;

function checkLogined(state = isLogined, action: any): boolean {
  if (action.type === "login") {
    state = true;
    return state;
  } else {
    state = false;
    return state;
  }
}

export default checkLogined;
