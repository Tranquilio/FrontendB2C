import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react"

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <Auth0Provider
  domain="dev-pt0s06vvzkgjxki5.au.auth0.com"
  clientId="VgzY8FmDsVpC2mbyjOiIR0IyA4EPdXth"
  redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>

  </Auth0Provider>
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
