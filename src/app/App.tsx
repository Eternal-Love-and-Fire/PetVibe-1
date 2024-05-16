import { RouterProvider } from "react-router-dom";
import { router } from "@/pages/router";

import "./index.css";

export const App = () => {
  return (
    <>
      <>
        <RouterProvider router={router} />
      </>
    </>
  );
};
