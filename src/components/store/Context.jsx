import axios from "axios";
import { createContext, useState, useCallback } from "react";

export const WeatherContext = createContext({
  weatherData: {},
  weatherForecastData: {},
  getWeatherData: () => {},
  getLocation: () => {},
  location: "",
});

export default function ContextProvider({ children }) {
  const [data, setData] = useState({});
  const [forecastData, setForecastData] = useState([])
  const [location, setLocation] = useState("");

  const API_KEY = "ecc1718928482bfa646ed03241ce28b4 ";
  const baseURl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`;

  const handleGetLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleGetForecastData = useCallback(async () => {
    try {
      const response = axios.get(forecastUrl)
      response.then(ress => setForecastData(ress.data.list))
    } catch(err){
      console.error(err)
    }
  }, [forecastUrl])

  const handleGetData = useCallback(async () => {
    try {
      const response = await axios.get(baseURl);
      const dataFetched = response.data;
      console.log(dataFetched);
      setData(dataFetched);
      handleGetForecastData()
      setLocation("");
      // console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }, [baseURl, handleGetForecastData]);


  let ctxValue = {
    weatherForecastData: forecastData,
    weatherData: data,
    getWeatherData: handleGetData,
    getLocation: handleGetLocation,
    location: location,
  };

  return <WeatherContext.Provider value={ctxValue}>{children}</WeatherContext.Provider>;
}
