import axios from "axios";
import { createContext, useState, useCallback, useEffect } from "react";

export const WeatherContext = createContext({
  weatherData: {},
  getWeatherData: () => {},
  getLocation: () => {},
  location: "",
});


export default function ContextProvider({ children }) {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("Jakarta");

  const API_KEY = "ecc1718928482bfa646ed03241ce28b4";
  const baseURl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  // const url = `https://api.openweathermap.org/data/2.5/forecast?q=Setiabudi&units=metric&appid=${API_KEY}`;
  // const image = `http://openweathermap.org/img/wn/01d@2x.png`

  const handleGetLocation = (e) => {
    let locationValue = e.target.value;
    setLocation(locationValue);
  };

  const handleGetData = useCallback(async () => {
    try {
      const response = await axios.get(baseURl);
      const dataFetched = response.data
      console.log(dataFetched)
      setData(dataFetched);
      // console.log(response.data);
      setLocation("");
    } catch (err) {
      console.error(err);
    }
  }, [baseURl]);
  useEffect(() => {

    handleGetData()
  }, [handleGetData]);


  let ctxValue = {
    weatherData: data,
    getWeatherData: handleGetData,
    getLocation: handleGetLocation,
    location: location,
  };

  return <WeatherContext.Provider value={ctxValue}>{children}</WeatherContext.Provider>;
}
