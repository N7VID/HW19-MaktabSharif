import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1550px] px-10 mx-auto py-3 shadow-md shadow-[#777777] fixed top-0 right-0 left-0 bg-white z-50">
      <Link to={"/"}>
        <img src="/MAKTAB2.png" alt="Maktab Sharif Icon" className="w-16" />
      </Link>
      <NavBar />
      <Button variant="primary">Dashboard</Button>
    </div>
  );
}
