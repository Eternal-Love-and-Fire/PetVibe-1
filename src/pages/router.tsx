import { createBrowserRouter } from "react-router-dom";
import { Home } from "./home/Home";
import { RootDefault } from "./roots/RootDefault";
import { Home as HomeV1 } from "@/V1/Home";

export const router = createBrowserRouter([
  {
    path: "/PetVibe-1/",
    element: <RootDefault />,
    children: [
      {
        path: "/PetVibe-1/",
        element: <Home />,
      },
      {
        path: "/PetVibe-1/v1",
        element: <HomeV1 />,
      },
    ],
  },
]);
