function LocationAndTemperature() {
  return (
    <>
      <div className="flex flex-col justify-between gap-y-10 mt-10 h-60">
        <div className="text-center">
          <h1 className="font-semibold text-2xl text-slate-100">Jakarta, ID</h1>
          <h3 className="font-semibold text-slate-100 text-xl mt-3">Clear</h3>
        </div>
        <div className="flex justify-center gap-x-10 items-center">
          <div>
            <img className="" src="http://openweathermap.org/img/wn/01d@2x.png" alt="..." />
          </div>
          <div>
            <h1 className="text-[3rem] font-bold text-slate-100">-1°C</h1>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <p className="text-white">Real Feel: 20</p>
          <p className="text-white">Humidity: 20</p>
          <p className="text-white">Wind: 20</p>
        </div>
        <div className="flex juatify-center items-center">
          <p className="text-center font-semibold text-slate-100 w-1/4 border-r border-white">Rise: 12.12AM</p>
          <p className="text-center font-semibold text-slate-100 w-1/4 border-r border-white">Set: 12.12PM</p>
          <p className="text-center font-semibold text-slate-100 w-1/4 border-r border-white">Lowest: -3°C</p>
          <p className="text-center font-semibold text-slate-100 w-1/4 border-r border-white">Highest: 20°C</p>
        </div>
        <div>
          <button>5 Day Forecast</button>
        </div>
      </div>
    </>
  );
}

export default LocationAndTemperature;
