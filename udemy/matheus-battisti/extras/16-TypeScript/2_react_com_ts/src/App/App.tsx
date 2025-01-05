// 4 - Importação de components
import FirstComponent from "../components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "../components/SecondComponent";
import Destructuring, { Category } from "../components/Destructuring";

// 6 - useState
import State from "../components/State";
import { createContext } from "react";

// 10 - Utilizando Contexto
import Context from "../components/Context";

// 8 - Type
type textOrNull = string | null;

// 9 - Context
interface IAppContext {
   language: string;
   framework: string;
   projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
   // 1 - Variáveis
   const name: string = "Douglas";
   const age: number = 20;
   const isWorking: boolean = true;

   // 2 - Funções
   const userGreeting = (name: string): string => {
      return `Olá, ${name}!`;
   };

   // 8 - Type
   const myText: textOrNull = "Tem algum texto aqui.";
   const mySecondText: textOrNull = null;

   // 9 - Context
   const contextValue: IAppContext = {
      language: "JavaScript",
      framework: "Express",
      projects: 5,
   };

   return (
      <AppContext.Provider value={contextValue}>
         <div className="App">
            <h1>TypeScript com React</h1>
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            {isWorking && <p>Está trabalhando</p>}
            <h3>{userGreeting("Douglas")}</h3>
            <FirstComponent />
            <SecondComponent name="Segundo" />
            <Destructuring
               title="Primeiro post"
               content="Algum conteúdo"
               commentsQty={10}
               tags={["ts", "js", "react", "prog"]}
               category={Category.TS}
            />
            <State />
            {}
            {myText && <p>Serei exibido</p>}
            {mySecondText && <p>não serei exibido</p>}
            <Context />
         </div>
      </AppContext.Provider>
   );
}

export default App;
