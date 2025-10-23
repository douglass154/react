import { useTodoContext } from "../../contexts/TodoContext";
import styles from "./TodoList.module.css";
import EmptyIcon from "../../assets/clipboard.svg?react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
   const { state: todos } = useTodoContext();

   return (
      <div className={styles.container}>
         {todos.length > 0 && (
            <div className={styles.infoTasksContainer}>
               <span className={styles.infoDoneTasks}>Concluídas</span>

               <div className={styles.infoCountDoneTasks}>
                  {todos.filter(item => item.isDone).length} de {todos.length}
               </div>
            </div>
         )}

         {todos.length <= 0 && (
            <div className={styles.emptyContainer}>
               <EmptyIcon />
               <p className={styles.emptyLabel}>
                  <strong>Você ainda não tem tarefas cadastradas.</strong>
                  <br />
                  Crie tarefas e organize seus items a fazer
               </p>
            </div>
         )}

         <div className={styles.tasksContainer}>
            {todos.map((item, index) => (
               <TodoItem key={index} data={item} dataIndex={index} />
            ))}
         </div>
      </div>
   );
};

export default TodoList;
