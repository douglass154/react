import type { ChangeEvent } from "react";
import type { Todo } from "../../@types/todo";
import { useTodoContext } from "../../contexts/TodoContext";
import styles from "./TodoItem.module.css";
import TrashIcon from "../../assets/trash.svg?react";

type Props = {
   data: Todo;
   dataIndex: number;
};

const TodoItem = ({ data, dataIndex }: Props) => {
   const { dispatch } = useTodoContext();

   const handleToggleIsDoneTodo = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
         type: "CHANGE",
         payload: { index: dataIndex, isDone: e.target.checked },
      });
   };

   const handleDeleteTodo = () => {
      dispatch({ type: "DELETE", payload: { index: dataIndex } });
   };

   return (
      <div className={styles.container}>
         <div className={styles.isDoneContainer}>
            <input
               type="checkbox"
               className={styles.isDoneInput}
               checked={data.isDone}
               onChange={handleToggleIsDoneTodo}
            />
         </div>

         <div
            className={`${styles.taskTitleContainer} ${
               data.isDone ? styles.taskDoneTitleContainer : ""
            }`}
         >
            {data.title}
         </div>

         <div className={styles.deleteTaskContainer}>
            <button
               className={styles.deleteTaskBtn}
               onClick={handleDeleteTodo}
            >
               <TrashIcon />
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
