import { useContext } from "react";
import Forecast from "./Forecast";
import { WeatherContext } from "./store/Context";

function LocationAndTemperature() {
  const { weatherData } = useContext(WeatherContext);

  const sunRise = weatherData.weather ? weatherData.sys.sunrise : null
  const sunSet = weatherData.weather ? weatherData.sys.sunset : null

  const handleConvertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours().toLocaleString()
    let miniutes = String(date.getMinutes().toLocaleString()).padStart(2, '0')
    const formatedTime = `${hours}:${miniutes}`
    return formatedTime
  }

  return (
    <>
      {weatherData.weather ? (
        <div className="flex flex-col justify-between mt-10 gap-y-10 h-full">
          <div className="text-center">
            <h1 className="font-semibold text-2xl text-slate-100">{weatherData.name}, {weatherData.sys.country}</h1>
            <h3 className="font-semibold text-slate-100 text-xl mt-3">{weatherData.weather[0].main}</h3>
            {/* <p className="font-semibold text-slate-100 mt-3">{weatherData.weather[0].description}</p> */}
          </div>
          <div className="flex justify-center gap-x-10 items-center">
            <div>
              <img className="" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="..." />
            </div>
            <div>
              <h1 className="text-[3rem] font-bold text-slate-100">{weatherData.main.temp.toFixed()}°C</h1>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <p className="text-white ">Real Feel: {weatherData.main.temp.toFixed()}°C </p>
            <p className="text-white ">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-white ">Pressure: {weatherData.main.pressure}</p>
          </div>
          <div className="flex juatify-center items-center">
            <p className="text-center font-semibold text-slate-100 w-1/4 px-3 border-x border-white">Rise: {handleConvertTimestamp(sunRise)}</p>
            <p className="text-center font-semibold text-slate-100 w-1/4 px-3 border-r border-white">Set: {handleConvertTimestamp(sunSet)}</p>
            <p className="text-center font-semibold text-slate-100 w-1/4 px-3 border-r border-white">Lowest: {weatherData.main.temp_min.toFixed()}°C</p>
            <p className="text-center font-semibold text-slate-100 w-1/4 px-3 border-r border-white">Highest: {weatherData.main.temp_max.toFixed()}°C</p>
          </div>
          <Forecast />
        </div>
      ) : <h1 className="text-center mt-10 font-bold text-slate-100 text-3xl">Search For City...</h1>}
    </>
  );
}

export default LocationAndTemperature;
