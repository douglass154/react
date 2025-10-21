import { createContext, useState } from "react";
import Button from "../components/Button";
import CardContext from "../components/CardContext";

type ThemeContextType = {
   theme: string;
   setTheme: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
   theme: "",
   setTheme: () => {},
});

const Theme = () => {
   const [theme, setTheme] = useState("light");
   
   return(
      <ThemeContext.Provider value={{ theme, setTheme }}>
         <Button />
         <CardContext />
      </ThemeContext.Provider>
   )
};

export default Theme;
