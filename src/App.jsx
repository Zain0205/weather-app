import axios from "axios";
import { useEffect } from "react";

function App() {
  const API_KEY = "2fae13cf42faebe935a10213f3c1516d";
  const baseURl = `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${API_KEY}`;

  useEffect(() => {
    const testFetch = async () => {
      try {
        const response = await axios.get(baseURl);
        console.log(response)
      } catch (err) {
        console.error(err);
      } finally {
        console.log("Berhasil")
      }
    };

    testFetch()

  }, [baseURl]);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-5">Coming Soon...</h1>
      <input type="text" />
    </div>
  );
}

export default App;
