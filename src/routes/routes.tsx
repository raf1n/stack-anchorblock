import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
  {
    path: "/sign-up",
  },
  {
    path: "/sign-in",
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);
