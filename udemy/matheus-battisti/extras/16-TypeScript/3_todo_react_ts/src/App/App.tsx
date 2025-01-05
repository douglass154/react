import styles from "./App.module.css";

// Components
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import Modal from "../components/Modal/Modal";

// Interfaces
import { ITask } from "../interfaces/Task";
import { useState } from "react";

function App() {
   const [taskList, setTaskList] = useState<ITask[]>([]);
   const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

   const deleteTask = (id: number) => {
      setTaskList(
         taskList.filter(task => {
            return task.id !== id;
         })
      );
   };

   const hideOrShowModal = () => {
      const modal = document.querySelector("#modal");
      modal!.classList.toggle("hide");
   };

   const editTask = (task: ITask): void => {
      hideOrShowModal();
      setTaskToUpdate(task);
   };

   const updateTask = (id: number, title: string, difficult: number) => {
      const updatedTask: ITask = { id, title, difficult };

      const updatedList = taskList.map(task => {
         return task.id === updatedTask.id ? updatedTask : task;
      });

      setTaskList(updatedList);
      hideOrShowModal();
   };

   return (
      <div>
         <Modal
            children={
               <TaskForm
                  btnText="Editar Tarefa"
                  taskList={taskList}
                  task={taskToUpdate}
                  handleUpdate={updateTask}
               />
            }
         />
         <Header />
         <main className={styles.main}>
            <div>
               <h2>O que você vai fazer?</h2>
               <TaskForm
                  btnText="Criar Tarefa"
                  taskList={taskList}
                  setTaskList={setTaskList}
               />
            </div>
            <div>
               <h2>Suas Tarefas:</h2>
               <TaskList
                  taskList={taskList}
                  handleDelete={deleteTask}
                  handleEdit={editTask}
               />
            </div>
         </main>
         <Footer />
      </div>
   );
}

export default App;
