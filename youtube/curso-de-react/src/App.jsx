import "./App.css";

import { useEffect, useState } from "react";
import { v4 } from "uuid";

// Components
import Tasks from "./components/Tasks";
import CreateTasks from "./components/CreateTasks";

const App = () => {
   const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks") || []));

   const [message, setMessage] = useState({ message: "", type: "" });
   const [showMessage, setShowMessage] = useState(false);

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks])

   // useEffect(() => {
   //    const fetchData = async() => {
   //       await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
   //          method: "GET"
   //       })
   //          .then(res => res.json())
   //          .then(data => setTasks(data))
   //          .catch(err => console.log("Erro ao conectar com a API: ", err))
   //    }

   //    fetchData();
   // }, [])

   const handleTaskClick = taskId => {
      const newTasks = tasks.map(task => {
         if (taskId === task.id) {
            return {
               ...task,
               isCompleted: !task.isCompleted,
            };
         }

         return task;
      });

      setTasks(newTasks);
   };

   const handleDeleteTask = taskId => {
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks(newTasks);
   };

   const createNewTask = (title, description) => {
      const newTask = {
         id: v4(),
         title,
         description,
         isCompleted: false,
      };

      setTasks([...tasks, newTask]);
      showMessageOnScreen("Tarefa adicionada com sucesso!", "success");
   };

   const showMessageOnScreen = (message, type) => {
      setMessage({ message, type });
      setShowMessage(true);

      setTimeout(() => {
         setShowMessage(false);
      }, 3 * 1000);
   };

   return (
      <div className="main-container">
         <div className="w-[500px] space-y-4">
            <h1>Gerenciador de Tarefas</h1>
            <CreateTasks
               createNewTask={createNewTask}
               showMessageOnScreen={showMessageOnScreen}
            />
            <Tasks
               tasks={tasks}
               handleTaskClick={handleTaskClick}
               handleDeleteTask={handleDeleteTask}
            />
         </div>

         <p
            className={`absolute px-4 py-2 rounded-sm transition duration-500 ease-in-out opacity-0 ${
               message.type === "success"
                  ? "bg-green-200 text-green-700"
                  : "bg-red-200 text-red-700"
            } ${showMessage ? "opacity-100" : "opacity-0"}`}
         >
            {message.message}
         </p>
      </div>
   );
};

export default App;
