import React from "react";
import { Link } from "react-router-dom";
type BtnType = {
  type: "btn" | "link";
  text: string;
  to?: string;
  classnames?: string;
  onClick?: () => void;
};
export const Btn: React.FC<BtnType> = ({
  type,
  text,
  to = "/",
  classnames,
  onClick,
}) => {
  if (type === "btn") {
    return (
      <>
        <button
          className={`h-[37px] text-sm text-black border border-black rounded-[10px] bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300 ${classnames}`}
          onClick={onClick}
        >
          {text}
        </button>
      </>
    );
  }
  return (
    <>
      <Link
        to={to}
        className={`h-[37px] text-sm text-black border border-black rounded-[10px] bg-[#FDFF89] hover:opacity-60 active:opacity-80 duration-300 ${classnames}`}
      >
        {text}
      </Link>
    </>
  );
  return <div>Btn</div>;
};
