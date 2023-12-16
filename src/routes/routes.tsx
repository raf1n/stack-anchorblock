import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);
