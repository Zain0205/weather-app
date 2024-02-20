import { useEffect } from "react";
import Input from "./components/Input";
import ContextProvider from "./components/store/Context";
import axios from "axios";
import LocationAndTemperature from "./components/LocationAndTemperature";

function App() {
  const API_KEY = "2fae13cf42faebe935a10213f3c1516d";
  const baseURl = `https://api.openweathermap.org/data/2.5/weather?q=Setiabudi&units=metric&appid=${API_KEY}`;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Setiabudi&units=metric&appid=${API_KEY}`
  // const image = `http://openweathermap.org/img/wn/01d@2x.png`

  useEffect(() => {
    const handleTest = async () => {
      const response = await axios.get(baseURl);
      console.log(response.data)
    };

    const handleTest2 = async () => {
      const response = await axios.get(url)
      console.log(response.data)
    }

    handleTest2()
     handleTest()
  }, [baseURl, url]);

  return (
    <ContextProvider>
      <div className="w-full h-screen bg-gradient-to-br from-cyan-700 to-blue-700">
        <div className="w-full h-full px-5 py-6 lg:w-1/2 lg:mx-auto">
          <Input />
          <LocationAndTemperature />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
