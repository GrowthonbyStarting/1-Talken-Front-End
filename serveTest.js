const getData = async () => {
  //테스트 유저 데이터 정의
  let userData = {
    email: "test@gmail.com",
    password: "test1234",
  };
  //데이터를 json형식으로 변환
  let data1 = JSON.stringify(userData);

  let res = await fetch("http://3.37.130.222:8080/users/login", {
    method: "POST",
    //요청바디에 담아서 전달
    body: data,
  });

  console.log(res.status, data);
};

getData();
