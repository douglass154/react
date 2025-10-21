import { useReducer, useState } from "react";

type TasksState = string[];
type TasksAction =
   | { type: "add"; payload: string }
   | { type: "remove"; payload: number };

const reducer = (state: TasksState, action: TasksAction): TasksState => {
   switch (action.type) {
      case "add":
         if (!action.payload) return state;
         return [...state, action.payload];

      case "remove":
         return state.filter((_, index) => index !== action.payload);

      default:
         return state;
   }
};

const CardUseReducer = () => {
   const [tasks, dispatch] = useReducer(reducer, []);
   const [inputValue, setInputValue] = useState("");

   const handleAddTask = () => {
      dispatch({ type: "add", payload: inputValue });
      setInputValue("");
   };

   const handleDeleteTask = (index: number) => 
      dispatch({ type: "remove", payload: index });

   return (
      <div className="container">
         <h2>Card UseReducer</h2>
         <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
         />
         <button onClick={handleAddTask}>Nova Tarefa</button>

         <ul style={{ padding: 0 }}>
            {tasks.map((task, index) => (
               <li
                  key={index}
                  style={{ display: "flex", gap: 12, marginBottom: 10 }}
               >
                  {task}
                  <button
                     onClick={() => handleDeleteTask(index)}
                     style={{ backgroundColor: "red" }}
                  >
                     remover
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CardUseReducer;
