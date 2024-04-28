import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img
        className="w-12 h-12 rounded-full"
        src="https://github.com/Eternal-Love-and-Fire/PetVibe-1/blob/main/src/assets/petvibe.jpeg"
        alt="PetVibe Logo"
      />
      <h1 className=" tracking-wider text-xl font-bold">PetVibe</h1>
    </Link>
  );
};
