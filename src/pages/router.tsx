import { createBrowserRouter } from "react-router-dom";
// import { Home } from "./home/Home";
import { RootDefault } from "./roots/RootDefault";
// import { Home as HomeV1 } from "@/V1/Home";
import { Home as HomeV2 } from "@/V2/Home";

export const router = createBrowserRouter([
  {
    path: "/PetVibe-1/",
    element: <RootDefault />,
    children: [
      {
        path: "/PetVibe-1/",
        element: <HomeV2 />,
      },
      {
        path: "/PetVibe-1/v1",
        element: <HomeV2 />,
      },
      {
        path: "/PetVibe-1/v2",
        element: <HomeV2 />,
      },
    ],
  },
]);
