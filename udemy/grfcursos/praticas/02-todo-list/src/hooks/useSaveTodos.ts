import { useEffect, useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { AES, enc } from "crypto-js";
import type { Todo } from "../@types/todo";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;
const LOCAL_STORAGE_KEY = "TODOS_DATA";

export const useSaveTodos = () => {
   const [gottedInitialData, setGottedInitialData] = useState(false);

   const { state, dispatch } = useTodoContext();

   const handleChangesTodo = () => {
      if(!gottedInitialData) return;

      const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);
      localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
   };

   // Getting initial todos
   useEffect(() => {
      try {
         const todosData = localStorage.getItem(LOCAL_STORAGE_KEY);

         if(todosData) {
            const bytes = AES.decrypt(todosData, SECRET_KEY);
            const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));

            dispatch({ type: "ADD", payload: decryptedData });
         }
      } catch (error) {
         alert("Não foi possível obter as tarefas salvas!");
      }

      setGottedInitialData(true);
   }, [])

   // Monitoring all changes on todos
   useEffect(() => {
      handleChangesTodo();
   }, [state]);
};
