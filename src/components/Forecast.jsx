function Forecast() {
  return (
    <div>
      <div className="border-b border-white pb-5 mb-2">
        <h1 className="text-xl text-slate-100 font-semibold">5 Day Forecast</h1>
      </div>
      <div className="flex flex-wrap ">
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    </div>
  );
}

function ForecastItem() {
  return (
    <div className="flex flex-col items-center w-1/5">
      <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="..." />
      <h2 className="font-bodld text-slate-100 text-xl">20°C</h2>
    </div>
  );
}

export default Forecast;
