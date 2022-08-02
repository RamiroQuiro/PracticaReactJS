import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./index.css";
import { store } from "./context/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    
    <Provider store={store}>
      <AppRouter />
      </Provider>
    </BrowserRouter>
);
