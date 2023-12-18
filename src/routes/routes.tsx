import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../components/Users/Users";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: (
          <PrivateRoute path="/sign-in">
            <Dashboard />,
          </PrivateRoute>
        ),
      },
      {
        path: "/home",
        element: (
          <PrivateRoute path="/sign-in">
            <Dashboard />,
          </PrivateRoute>
        ),
      },
      {
        path: "/users",
        element: (
          <PrivateRoute path="/sign-in">
            <Users />,
          </PrivateRoute>
        ),
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
