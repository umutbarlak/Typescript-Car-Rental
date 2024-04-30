import CustomButton from "../CustomButton";
import { motion, transform } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle text-gray-200">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel
          kılabilirsin.
        </p>

        <CustomButton title="Arabaları Keşfet" designs="mt-10" />
      </div>

      <motion.div
        initial={{ translateX: 200, scale: 0.7 }}
        whileInView={{ translateX: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-100 flex justify-center"
      >
        <img
          src="./../../../public/hero.png"
          alt=""
          className=" img-fluid object-contain max-w-[700px]:"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
