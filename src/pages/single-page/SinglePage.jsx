import { useParams } from "react-router-dom";
import { useGetSingleBootCamp } from "../../hooks/useGetSingleBootCamp";

export default function SinglePage() {
  const { id } = useParams();
  const { data } = useGetSingleBootCamp(id);
  console.log(data);

  console.log(id);
  return <div className="pt-32">SinglePage</div>;
}
