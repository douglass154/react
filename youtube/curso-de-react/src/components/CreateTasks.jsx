import { useState } from "react";

import Input from "./Input";

const CreateTasks = ({ createNewTask, showMessageOnScreen }) => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   

   const handleCreateTask = () => {
      if(!title.trim()) {
         showMessageOnScreen("O título não pode estar vazio!", "error");
         return;
      }
      createNewTask(title, description)
      setTitle("");
      setDescription("");
   }

   return (
      <div className="container flex flex-col">
         <Input
            type="text"
            placeholder="Título da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <Input
            type="text"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={e => setDescription(e.target.value)}
         />
         <button onClick={handleCreateTask} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer">
            Adicionar
         </button>
      </div>
   );
};

export default CreateTasks;
