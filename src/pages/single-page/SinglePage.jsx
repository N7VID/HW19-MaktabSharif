import { useParams } from "react-router-dom";

export default function SinglePage() {
  const { id } = useParams();
  console.log(id);
  return <div className="pt-32">SinglePage</div>;
}
