import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";
import { generateImage } from "../../utlis";
import Loading from "../Loading";

type DetailProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};

const DetailModal = ({ isOpen, closeModal, car }: DetailProps) => {
  const carInfo = Object.entries(car);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 grid bg-black bg-opacity-25 place-items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.4, opacity: 50 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            className="bg-white max-h-[90vh] max-w-[600px] relative p-4 rounded-2xl flex flex-col detail "
          >
            <button
              onClick={closeModal}
              className=" absolute right-0 top-0 p-2 bg-white cursor-pointer rounded-full"
            >
              <img src="/public/close.svg" alt="" />
            </button>

            <div className=" flex-1 flex flex-col gap-2">
              {/* big image */}
              {!generateImage(car) ? (
                <Loading designs={"h-40"} />
              ) : (
                <div className="w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <img
                    className=" w-full h-full object-contain"
                    src={generateImage(car)}
                    alt=""
                  />
                </div>
              )}

              {/* little image */}
              <div className="flex gap-3 ">
                {!generateImage(car) ? (
                  <Loading designs={"h-24  "} />
                ) : (
                  <div className=" flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-md">
                    <img
                      src={generateImage(car, "29")}
                      alt=""
                      className=" h-full object-contain mx-auto"
                    />
                  </div>
                )}

                {!generateImage(car) ? (
                  <Loading designs={"h-24"} />
                ) : (
                  <div className=" flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-md">
                    <img
                      src={generateImage(car, "33")}
                      alt=""
                      className=" h-full object-contain mx-auto"
                    />
                  </div>
                )}

                {!generateImage(car) ? (
                  <Loading designs={"h-24 "} />
                ) : (
                  <div className=" flex-1 flex relative w-full h-24 bg-primary-blue-100 rounded-md">
                    <img
                      src={generateImage(car, "13")}
                      alt=""
                      className=" h-full object-contain mx-auto"
                    />
                  </div>
                )}
              </div>

              {/* car info */}
              {carInfo.map(([key, value], i) => (
                <div key={i} className=" flex justify-between my-[-1px]">
                  <h4 className=" capitalize text-gray-800">
                    {key.replace("_", " ")}
                  </h4>
                  <p className=" text-black-100 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
