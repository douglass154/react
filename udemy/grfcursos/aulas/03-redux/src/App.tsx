import { Provider } from "react-redux";
import { store } from "./redux/store";
import Button from "./components/Button";

function App() {
   return (
      <Provider store={store}>
         <div>
            <Button />
         </div>
      </Provider>
   );
}

export default App;
