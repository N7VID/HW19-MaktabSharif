import Button from "../Button/Button";

export default function Header() {
  return (
    <div className="flex justify-between items-center max-w-[1450px] mx-auto py-2">
      <img src="/MAKTAB2.png" alt="Maktab Sharif Icon" className="w-14" />
      <Button variant="primary">Dashboard</Button>
    </div>
  );
}
