import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

const CardContext = () => {
   const { theme } = useContext(ThemeContext);

   const checkTheme = () => theme === "light"

   return (
      <div className="container" style={{ backgroundColor: checkTheme() ? "white" : "black", color: checkTheme() ? "black" : "white" }}>
         <h2>useContext e CreateContext</h2>
      </div>
   );
};

export default CardContext;
