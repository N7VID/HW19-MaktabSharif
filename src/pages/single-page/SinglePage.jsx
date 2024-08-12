import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import { useGetSingleBootCamp } from "../../hooks/useGetSingleBootCamp";

let keys, values;
export default function SinglePage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBootCamp(id);
  if (data) {
    keys = Object.keys(data?.syllabus?.[0]);
    values = Object.values(data?.syllabus?.[0]);
  }

  return (
    <div>
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <>
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
          <section className="flex flex-col justify-center items-center py-16  cursor-default">
            <h3 className="text-3xl font-semibold text-[#333]">{`<BootCamp Syllabus/>`}</h3>
            <p className="text-gray-900 text-lg py-4 px-48 text-center">
              The syllabus of the school's bootcamps is continuously updated
              according to the needs of the labor market and job advertisements,
              and you are taught in the form of executive projects.
            </p>
            <div className="mx-auto my-4 w-[500px]">
              {keys?.map((item, index) => (
                <Accordion key={item}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${item}-content`}
                    id={item}
                    className="text-xl font-semibold"
                  >
                    {item}
                  </AccordionSummary>
                  <AccordionDetails>
                    {values[index].map((item) => (
                      <div
                        key={item}
                        className="flex justify-start gap-2 items-center py-[2px]"
                      >
                        <img src="/check-black.svg" className="w-6"></img>
                        <p key={item}>{item}</p>
                      </div>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
