import { useState } from "react";
import styles from "./Header.module.css";
import { useTodoContext } from "../../contexts/TodoContext";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Header = () => {
   const [inputValue, setInputValue] = useState("");
   const { dispatch } = useTodoContext();

   const handleNewTask = () => {
      if (!inputValue) {
         alert("Digite um título para a sua tarefa.");
         return;
      }

      dispatch({ type: "ADD", payload: { title: inputValue, isDone: false } });
      setInputValue("");
   };

   return (
      <div className={styles.container}>
         <div className={styles.brandContainer}>
            <img src="/brand.png" alt="brand" />
         </div>

         <div className={styles.newTaskContainer}>
            <div className={styles.newTaskInput}>
               <Input
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
               />
            </div>

            <Button onClick={handleNewTask} />
         </div>
      </div>
   );
};

export default Header;
