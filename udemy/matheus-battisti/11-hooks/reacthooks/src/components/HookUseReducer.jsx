import { useReducer, useState } from 'react';

const HookUseReducer = () => {
   // 1 - Começando com o useReducer
   const [number, dispatch] = useReducer((state, action) => {
      return Math.random(state);
   });

   // 2 - Avançando no useReducer
   const initialTasks = [
      { id: 1, text: 'Fazer alguma coisa' },
      { id: 2, text: 'Fazer outra coisa' },
   ];

   const taskReducer = (state, action) => {
      switch (action.type) {
         case 'ADD':
            const newTask = {
               id: Math.random(),
               text: action.text,
            };

            return [ ...state, newTask ];
         case 'DELETE':
            return state.filter(task => task.id !== action.id);
         default:
            return state;
      }
   };

   const [taskText, setTaskText] = useState('');
   const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

   const handleSubmit = e => {
      e.preventDefault();

      if(taskText.trim()) {
         dispatchTasks({ type: 'ADD', text: taskText });
         setTaskText('')
      }
   };

   const removeTask = id => {
      dispatchTasks({ type: 'DELETE', id });
   };

   return (
      <div>
         {/* 1 - useReducer */}
         <h2>useReducer</h2>
         <p>Numero: {number}</p>
         <button onClick={dispatch}>Roletar</button>

         {/* 2 - Avançando no useReducer */}
         <h3>Tarefas:</h3>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               value={taskText}
               onChange={e => setTaskText(e.target.value)}
            />
            <input type="submit" value="Enviar" />
         </form>
         <ul>
            {tasks.map(task => (
               <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
                  {task.text}
               </li>
            ))}
         </ul>    
         <hr />
      </div>
   );
};

export default HookUseReducer;
