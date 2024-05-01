import { colors } from "../constants";
import { CarType, filterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "792b6880efmsh80358c12cfc0dcep1e0ceajsn34f1a902dffd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = "Tesla",
    model = "",
    year = "",
    fuel = "",
    limit = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    options
  );

  return await res.json();
}

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append("zoomType", "fullscreen");

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  const index = Math.round(Math.random() * colors.length);

  url.searchParams.append("paintId", colors[index]);

  return String(url);
};
