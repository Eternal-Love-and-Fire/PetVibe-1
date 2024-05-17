import { Link } from "react-router-dom";
import petVibeLogo from "@/assets/logo.png";

export const Logo = () => {
  return (
    <Link to={"/PetVibe-1/"} className="flex p-2 items-center gap-2">
      <img
        className=""
        src={petVibeLogo}
        alt="PetVibe Logo"
      />
    </Link>
  );
};
