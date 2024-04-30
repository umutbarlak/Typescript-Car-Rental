import { Link } from "react-router-dom";
import CostumButtom from "../CustomButton";

const Header = () => {
  return (
    <header className=" w-full absolute z-10">
      <nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img width={50} src="/bmw.png" alt="" />
        </Link>

        <CostumButtom
          title={"Kaydol"}
          btnType={"button"}
          designs={"min-w-[120px]"}
        />
      </nav>
    </header>
  );
};

export default Header;
