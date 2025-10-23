import type { ChangeEvent } from "react";
import styles from "./Input.module.css";

type Props = {
   value: string;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange }: Props) => {
   return (
      <div className={styles.container}>
         <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={value}
            onChange={onChange}
         />
      </div>
   );
};

export default Input;
