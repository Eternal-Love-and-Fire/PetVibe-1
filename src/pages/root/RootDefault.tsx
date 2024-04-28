import { Outlet, ScrollRestoration } from "react-router-dom";

export const RootDefault = () => {
  return (
    <div className="">
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
