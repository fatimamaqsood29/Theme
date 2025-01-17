import React from "react";
import ReactDOM from "react-dom/client"; // Use createRoot from react-dom/client
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);