import { useContext } from "react";
import { ThemeContext } from "../contexts/Theme";

const Button = () => {
   const { theme, setTheme } = useContext(ThemeContext);

   return (
      <div className="container">
         <h2>useContext e CreateContext</h2>
         <p>Meu tema é: {theme}</p>

         {theme == "light"
            ? <button onClick={() => setTheme("dark")}>Trocar tema para dark</button>
            : <button onClick={() => setTheme("light")}>Trocar tema para light</button>
         }
      </div>
   );
};

export default Button;
