import { useSearchParams } from "react-router-dom";
import CostumButtom from "../CustomButton";

const ShowMore = () => {
  const [params, setParams] = useSearchParams();

  const limit = Number(params.get("limit")) || 5;

  const handleLimit = () => {
    const newLimit = limit + 5;
    params.set("limit", String(newLimit));
    setParams(params);
  };

  return (
    <div className=" flex justify-center my-10 w-full">
      {limit < 30 && (
        <CostumButtom handleClick={handleLimit} title={"Daha Fazla"} />
      )}
    </div>
  );
};

export default ShowMore;
