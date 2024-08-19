import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify"; // добавление уведомлениЯ о добавлении продукта в корзину
import "react-toastify/dist/ReactToastify.css"; // добавление уведомлениЯ о добавлении продукта в корзину
import customTheme from "../theme.js";
//import { ScrollProvider } from "./components/ScrollContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      <ChakraProvider theme={customTheme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnHover={false}
        />
         {/* <ScrollProvider> */}
        <App />
        {/* </ScrollProvider> */}
      </ChakraProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// подключение роутинга
