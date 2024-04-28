import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { RootDefault } from "./root/RootDefault";

export const router = createBrowserRouter([
  {
    path: "/PetVibe-1/",
    element: <RootDefault />,
    children: [
      {
        path: "/PetVibe-1/",
        element: <Home />,
      },
    ],
  },
]);
