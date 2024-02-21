import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { WeatherContext } from "./store/Context";

function Input() {
  const { getLocation, location, getWeatherData } = useContext(WeatherContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      getWeatherData()
    }
  }

  return (
    <div className="relative text-center">
      <input onKeyDown={handleKeyDown} onChange={getLocation} value={location} type="text" className="rounded-full w-full px-5 py-2 focus:outline-none text-xl font-light capitalize shadow-xl" placeholder="Search for city..." />
      <button onClick={getWeatherData} className="absolute text-[1.7rem] cursor-pointer top-[8.5px] right-4">
        <CiSearch />
      </button>
    </div>
  );
}

export default Input;
