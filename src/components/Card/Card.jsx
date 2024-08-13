/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function Card({ data }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`${data.id}`);
  };
  return (
    <div
      className="bg-white shadow-lg rounded-lg flex justify-center flex-col items-center
    py-4 px-8 w-64 h-[450px] gap-4 cursor-default"
    >
      <h1 className="text-2xl font-semibold">{data.name}</h1>
      <img src={data.imgSrc} alt={data.name} className="w-28" />
      <p className="text-sm text-gray-900 justify-center text-balance overflow-hidden text-ellipsis whitespace-nowrap h-36 text-center">
        {data.description}
      </p>
      <span className="p-2 border-y-2 border-gray-400">
        {data.Weeks} Weeks | {data.Hours} Hours
      </span>
      <Button variant={"card"} onClick={handleButtonClick}>
        More Details
      </Button>
    </div>
  );
}
