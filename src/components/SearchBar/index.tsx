import ReactSelect from "react-select";
import { makes } from "../../constants";
import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { OptionsType } from "../../types";

type ButtonProps = {
  styling: string;
};

const SearchButton = ({ styling }: ButtonProps) => {
  return (
    <button className={`ms-3 z-10 ${styling}`}>
      <img src="/magnifying-glass.svg" alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [params, setParams] = useSearchParams();

  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make && model) {
      setParams({
        make: make.toLocaleLowerCase(),
        model: model.toLocaleLowerCase(),
      });
    }
    if (make && !model) {
      setParams({
        make: make.toLocaleLowerCase(),
      });
    }
  };

  const carOptions: OptionsType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [make]
  );

  return (
    <form className="searchbar gap-3" onSubmit={handleSubmit}>
      <div className="searchbar__item text-black">
        <ReactSelect
          options={carOptions}
          onChange={(e) => e && setMake(e.value)}
          className=" w-full"
        />
        <SearchButton styling={"sm:hidden"} />
      </div>

      <div className=" searchbar__item">
        <img
          width={25}
          className=" absolute ms-4"
          src="/model-icon.png"
          alt=""
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="örn:BMW"
        />

        <SearchButton styling={"sm:hidden"} />
      </div>
      <SearchButton styling={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
