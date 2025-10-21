import Button from "./components/Button";
import { ContextProvider } from "./contexts/Context";

function App() {
   return (
      <ContextProvider>
         <Button />
      </ContextProvider>
   );
}

export default App;
