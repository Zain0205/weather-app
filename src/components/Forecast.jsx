import { useContext } from "react";
import { WeatherContext } from "./store/Context";

function Forecast() {
  const { weatherForecastData } = useContext(WeatherContext);

  // const uniqueforecast = weatherForecastData
  // console.log(forecastData)
  console.log(weatherForecastData)
  return (
    <div>
      <div className="border-b border-white pb-5 mb-2">
        <h1 className="text-xl text-slate-100 font-semibold">5 Day Forecast / 3 Hour</h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {weatherForecastData ? weatherForecastData.map((data, i) => <ForecastItem temp={data.main.temp} time={data.dt_txt} icon={data.weather[0].icon} key={i} />) : null}
      </div>
    </div>
  );
}

function ForecastItem({icon, temp, time}) {
  return (
    <div className="flex flex-col items-center w-1/5 px-3">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="..." />
      <h1 className="text-center font-semibold text-base mb-2 text-slate-100">{time}</h1>
      <h2 className="font-bold text-slate-100 text-xl">{temp.toFixed()}°C</h2>
    </div>
  );
}

export default Forecast;
