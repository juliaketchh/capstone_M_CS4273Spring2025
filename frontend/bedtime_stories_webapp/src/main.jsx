import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/Login";
import "./index.css"; 
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app" element={<App />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
  </StrictMode>
);
