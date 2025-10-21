// import Card from "./components/Card/Card";
import { ThemeProvider } from "styled-components";
import { Input } from "./components/Input/Input";
import theme from "./theme/theme";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         {/* <Card /> */}
         <Input />
      </ThemeProvider>
   );
};

export default App;
