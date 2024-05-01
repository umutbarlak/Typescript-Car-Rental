import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearcBar from "../components/SearchBar";
import Card from "../components/Card";
import { fuels, years } from "../constants";
import { useSearchParams } from "react-router-dom";
import { fetchCars } from "../utlis";
import { CarType } from "../types";
import ShowMore from "../components/ShowMore";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());
    fetchCars(paramsObj).then((res) => setCars(res));
    setParams(paramsObj);
  }, [params]);

  return (
    <div className=" overflow-hidden">
      <Hero />

      <div id="catalogue" className="padding-x padding-y max-width mt-12">
        <div className="home__text-container ">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        <div className="home__filters mt-10">
          <SearcBar />
          <div className=" home__filter-container ">
            <CustomFilter title={"Yakıt Tipi"} options={fuels} />
            <CustomFilter title={"Yıl"} options={years} />
          </div>
        </div>

        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <section className=" mt-10">
            <div className="home__cars-wrapper">
              {cars?.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )}

        <ShowMore />
      </div>
    </div>
  );
};

export default MainPage;
