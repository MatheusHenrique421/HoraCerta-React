import { ThemeProvider } from "./shared/context/ThemeContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import React from "react";

export default function App() {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  )
}