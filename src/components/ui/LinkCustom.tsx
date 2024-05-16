import React from "react";
import { Link } from "react-router-dom";
interface LinkCustomModel {
  to: string;
  title: string;
}
export const LinkCustom: React.FC<LinkCustomModel> = ({ to, title }) => {
  return (
    <Link
      to={to}
      className="font-light border-b-2 border-b-transparent hover:border-black duration-300"
    >
      {title}
    </Link>
  );
};
