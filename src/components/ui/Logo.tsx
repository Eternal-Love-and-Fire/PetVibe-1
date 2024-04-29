import { Link } from "react-router-dom";
import petVibeImg from "@/assets/petvibe.jpeg";

export const Logo = () => {
  return (
    <Link to={"/PetVibe-1/"} className="flex items-center gap-2">
      <img
        className="w-12 h-12 rounded-full"
        src={petVibeImg}
        alt="PetVibe Logo"
      />
      <h1 className=" tracking-wider text-xl font-bold">PetVibe</h1>
    </Link>
  );
};
