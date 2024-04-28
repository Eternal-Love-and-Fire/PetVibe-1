import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { RootDefault } from "./root/RootDefault";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
