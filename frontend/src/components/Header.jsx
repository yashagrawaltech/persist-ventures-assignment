import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <div className="w-full px-12 py-6 bg-black/80 flex items-center justify-between">
      <span>
        <img
          className="h-8"
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
          alt="persist venture logo"
        />
      </span>
      <nav className="flex gap-4 items-center justify-end text-white text-base capitalize">
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200" to={"/"}>Ongoing Startupathon</Link>
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200" to={"/"}>Completed Startupathon</Link>
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200" to={"/"}>Startupathon Guide</Link>
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200" to={"/"}>How to win</Link>
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200" to={"/"}>Mentor Network</Link>
        <Link className="hover:text-[#7a56d6] transition-all ease-in-out duration-200">
          <Button>Apply For Fellowship</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
