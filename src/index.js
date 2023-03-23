import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductComponent from "./containers/ProductComponent";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"; // Burayı ekleyin

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <App />
        
      </BrowserRouter> 
    </Provider>
  </React.StrictMode>
);
