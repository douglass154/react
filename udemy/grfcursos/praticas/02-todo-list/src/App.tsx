import Header from "./components/Header/Header";
import { useSaveTodos } from "./hooks/useSaveTodos";

import styles from "./App.module.css";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
   // Monitoring all changes on todos and saving on localStorage
   useSaveTodos();

   return (
      <div className={styles.container}>
         <header>
            <Header />
         </header>

         <main>
            <TodoList />
         </main>
      </div>
   );
}

export default App;
