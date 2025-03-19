import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import UserEdit, { userLoader } from "../pages/UserEdit";
import Users from "../pages/Users";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:userId",
        element: <UserEdit />,
        loader: userLoader,
      },
    ],
  },
]);

export default router;
