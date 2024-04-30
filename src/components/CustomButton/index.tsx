import { ButtonProps } from "../../types";

const CostumButtom = ({
  title,
  btnType,
  designs,
  rIcon,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn ${designs} `}
    >
      <span>{title}</span>

      {rIcon && (
        <div className=" absolute w-6 h-6 right-3 ">
          <img src={rIcon} alt="right-arrow" className="" />
        </div>
      )}
    </button>
  );
};

export default CostumButtom;
