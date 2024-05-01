import { useState } from "react";
import CostumButton from "../CustomButton";
import CardInfo from "./CardInfo";
import { motion } from "framer-motion";
import DetailModal from "./DetailModal";
import { CarType } from "../../types";
import { generateImage } from "../../utlis";

type CardProps = {
  car: CarType;
};

const Card = ({ car }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">{car.make + " " + car.model}</h2>
      <p className="flex mt-6 text-[32px]">
        <span className=" text-[19px]  font-semibold">₺</span>
        <span>{Math.round(Math.random() * 5000) + 34}</span>
        <span className="text-[14px] self-end font-medium">/gün</span>
      </p>

      <div className=" relative w-full h-40 my-3">
        <img
          src={generateImage(car)}
          alt="car-pic"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full relative mt-5 ">
        <div className="car-card__btn-container ">
          <CostumButton
            title={"Daha Fazla"}
            designs="w-full py-[16px] text-white"
            rIcon={"/public/right-arrow.svg"}
            handleClick={() => setIsOpen(true)}
          />
        </div>

        <div className="flex justify-between w-full group-hover:invisible">
          <CardInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon={"/public/steering-wheel.svg"}
          />
          <CardInfo
            title={car.drive ? car.drive?.toUpperCase() : "RWD"}
            icon={"/public/tire.svg"}
          />
          <CardInfo
            title={car.fuel_type?.toUpperCase()}
            icon={"/public/gas.svg"}
          />
        </div>
      </div>

      <DetailModal
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </motion.div>
  );
};

export default Card;
