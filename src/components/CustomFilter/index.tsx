import { useEffect, useState } from "react";
import Select from "react-select";
import { OptionsType } from "../../types";
import { useSearchParams } from "react-router-dom";

type CustomFilterType = {
  title: string;
  options: OptionsType[];
};

const CustomFilter = ({ title, options }: CustomFilterType) => {
  const [selected, setSelected] = useState<OptionsType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if (selected?.value) {
      params.set(key, selected.value.toLocaleLowerCase());
    } else {
      params.delete(key);
    }
    setParams(params);
  }, [selected]);

  return (
    <div>
      <Select
        onChange={(e) => setSelected(e)}
        options={options}
        placeholder={title}
        className=" text-black min-w-[120px]"
      />
    </div>
  );
};

export default CustomFilter;
