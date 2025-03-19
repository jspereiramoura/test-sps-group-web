import { RouterProvider } from "react-router-dom";
import router from "./routes";

export default function Router() {
  return <RouterProvider router={router} />;
}
