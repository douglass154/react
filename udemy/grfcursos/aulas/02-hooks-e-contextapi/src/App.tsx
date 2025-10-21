import CardUseReducer from "./components/CardUseReducer";
import CardUseRef from "./components/CardUseRef";
import Theme from "./contexts/Theme";

const App = () => {
   return (
      <div id="root">
         <CardUseRef />
         <CardUseReducer />
         <Theme />
      </div>
   );
};

export default App;
