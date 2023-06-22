import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";

let store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
