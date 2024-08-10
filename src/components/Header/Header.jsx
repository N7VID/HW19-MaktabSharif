import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1550px] px-10 mx-auto py-3 shadow-md shadow-[#b6b6b6]">
      <img src="/MAKTAB2.png" alt="Maktab Sharif Icon" className="w-16" />
      <NavBar />
      <Button variant="primary">Dashboard</Button>
    </div>
  );
}
