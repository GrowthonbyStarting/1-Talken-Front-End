const getData = async () => {
  let res = await fetch("http://43.202.3.11:8080/users/login", {
    method: "POST",
    data: {
      email: "test@gmail.com",
      password: "test1234",
    },
  });
  console.log(res.status);
};

getData();
