import Button from "../../components/Button/Button";

export default function HomePage() {
  return (
    <div className="flex justify-between pt-[100px]">
      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="flex flex-col gap-10 cursor-default">
          <h2 className="text-4xl font-[900] text-[#333] text-center">
            {"<Employment Through Learning />"}
          </h2>
          <p className="text-xl flex justify-center items-center max-w-[520px]">
            Online programming bootcamp that invests in you; A proven path to a
            well-paying tech career!
          </p>
          <div className="flex items-center gap-4">
            <Button variant={"primary"}>Register</Button>
            <Button variant={"secondary"}>What is BootCamp?</Button>
          </div>
        </div>
      </div>
      <img src="/hero-img.png" alt="" className="w-[730px]" />
    </div>
  );
}
