import { useParams } from "react-router-dom";
import { useGetSingleBootCamp } from "../../hooks/useGetSingleBootCamp";
import Button from "../../components/Button/Button";

export default function SinglePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBootCamp(id);
  console.log(data);

  console.log(id);
  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <section className="flex justify-between pt-[100px] bg-mainBg">
          <div className="flex-grow flex justify-center items-center">
            <div className="flex flex-col gap-10 cursor-default w-[600px]">
              <div className="flex items-center gap-4">
                <img src={data.imgSrc} alt="" className="w-16" />
                <h2 className="text-2xl font-[900] text-[#333] text-center">
                  {`${data.name} BootCamp`}
                </h2>
              </div>
              <h2 className="text-5xl font-[900] text-[#333] text-center">
                {"<The world still needs a lot of programmers/>"}
              </h2>
              <p className="text-xl flex justify-center items-center max-w-[520px]">
                {data.description}
              </p>
              <div className="flex items-center gap-4">
                <Button variant={"primary"}>Register</Button>
                <Button variant={"secondary"}>More Details</Button>
              </div>
            </div>
          </div>
          <img src={data.imgHero} alt="" className="w-[727px] h-[613px]" />
        </section>
      )}
    </div>
  );
}
