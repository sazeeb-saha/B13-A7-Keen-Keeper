import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Timeline from "./pages/timeline/Timeline";
import Homepage from "./pages/homepage/Homepage";
import FriendDetails from "./pages/friendDetails/FriendDetails";
import CheckInProvider from "./context/CheckInProvider";
import { ToastContainer } from "react-toastify";
import Stats from "./pages/stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CheckInProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CheckInProvider>
  </StrictMode>,
);
