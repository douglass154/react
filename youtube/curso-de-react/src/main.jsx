import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />
   },
   {
      path: "/task",
      element: <TaskPage />
   }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
