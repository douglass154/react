import styles from "./TaskForm.module.css";

// Hooks
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Interfaces
import { ITask } from "../../interfaces/Task";

type Props = {
   btnText: string;
   taskList: ITask[];
   setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
   task?: ITask | null;
   handleUpdate?(id: number, title: string, difficult: number): void;
};

const TaskForm = ({
   btnText,
   taskList,
   setTaskList,
   task,
   handleUpdate,
}: Props) => {
   const [id, setId] = useState<number>(0);
   const [title, setTitle] = useState<string>("");
   const [difficult, setDifficult] = useState<number>(0);

   useEffect(() => {
      if (task) {
         setId(task.id);
         setTitle(task.title);
         setDifficult(task.difficult);
      }
   }, [task]);

   const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (handleUpdate) {
         handleUpdate(id, title, difficult);
      } else {
         const id = Math.floor(Math.random() * 1000);
         const newTask: ITask = { id, title, difficult };

         setTaskList!([...taskList, newTask]);
         setTitle("");
         setDifficult(0);
      }
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.name === "title") {
         setTitle(e.target.value);
      } else {
         setDifficult(Number(e.target.value));
      }
   };

   return (
      <form
         className={styles.form}
         onSubmit={addTaskHandler}
         autoComplete="off"
      >
         <div className={styles.input_container}>
            <label>
               <span>Título:</span>
               <input
                  type="text"
                  name="title"
                  placeholder="Título da tarefa"
                  onChange={handleChange}
                  value={title}
               />
            </label>
         </div>
         <div className={styles.input_container}>
            <label>
               <span>Dificuldade:</span>
               <input
                  type="text"
                  name="difficult"
                  placeholder="Dificuldade da tarefa"
                  onChange={handleChange}
                  value={difficult}
               />
            </label>
         </div>
         <input type="submit" value={btnText} />
      </form>
   );
};

export default TaskForm;
