let initTabNum: number = 1;

function tab(state = initTabNum, action: any) {
  if (action.type === "포트폴리오") {
    state = 1;
    return state;
  } else if (action.type === "이력서") {
    state = 2;
    return state;
  } else if (action.type === "자기소개서") {
    state = 3;
    return state;
  } else if (action.type === "피드백보기") {
    state = 4;
    return state;
  } else {
    return state;
  }
}

export default tab;
