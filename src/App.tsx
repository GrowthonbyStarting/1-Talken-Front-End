import Router from "./Router";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import "./styles/App.css";
import Header from "./common_components/Header";

function App() {
  const checkIsLogined = useSelector((state: any) => state?.checkLogined);

  return (
    <div className="App">
      {checkIsLogined ? (
        <>
          <Header />
          <Router />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
