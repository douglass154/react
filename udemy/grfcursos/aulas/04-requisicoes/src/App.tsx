import CardGetRequest from "./components/CardGetRequest";
import CardGetWithAxios from "./components/CardGetWithAxios";
import CardPostRequest from "./components/CardPostRequest";

const App = () => {
   return(
      <div className="root">
         <CardGetRequest />
         <CardPostRequest />
         <CardGetWithAxios />
      </div>
   )
};

export default App;
