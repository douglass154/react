import { ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
   const navigate = useNavigate();

   const handleSeeDetailsClick = (title, description) => {
      const query = new URLSearchParams();
      query.set("title", title);
      query.set("description", description);

      navigate(`/task?${query.toString()}`);
   }

   return (
      <ul className="container max-h-[600px] overflow-y-auto">
         {tasks.map(task => (
            <li key={task.id} className="flex gap-2">
               <button
                  onClick={() => handleTaskClick(task.id)}
                  className={`btn-tasks w-full text-left ${task.isCompleted && "line-through"}`}
               >
                  {task.title}
               </button>
               <button onClick={() => handleSeeDetailsClick(task.title, task.description)} className="btn-tasks">
                  <ChevronRight />
               </button>
               <button onClick={() => handleDeleteTask(task.id)} className="btn-tasks bg-red-400 duration-300 hover:bg-red-500">
                  <Trash2 />
               </button>
            </li>
         ))}
      </ul>
   );
};

export default Tasks;
