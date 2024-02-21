import Input from "./components/Input";
import ContextProvider from "./components/store/Context";
import LocationAndTemperature from "./components/LocationAndTemperature";

function App() {
  
  return (
    <ContextProvider>
      <div className="w-full min-h-screen bg-gradient-to-br from-cyan-700 to-blue-700">
        <div className="w-full h-full px-5 py-6 lg:w-1/2 lg:mx-auto">
          <Input />
          <LocationAndTemperature />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
