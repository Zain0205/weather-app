import { createContext } from "react";

export const WeatherContext = createContext({});

export default function ContextProvider({children}){
  return <WeatherContext.Provider>{children}</WeatherContext.Provider>
}