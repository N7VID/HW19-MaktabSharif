import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <div className="flex justify-between pt-[100px]">
      <div className="flex-grow flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col gap-4 max-w-[400px] cursor-default">
          <h2 className="text-xl font-[900] text-[#333] text-center">
            {"<Employment Through Learning />"}
          </h2>
          <p className="text-lg flex justify-center items-center">
            Online programming bootcamp that invests in you; A proven path to a
            well-paying tech career!
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button variant={"primary"}>Register</Button>
          <Button variant={"secondary"}>What is BootCamp?</Button>
        </div>
      </div>
      <img src="/hero-img.png" alt="" className="w-[730px]" />
    </div>
  );
}
