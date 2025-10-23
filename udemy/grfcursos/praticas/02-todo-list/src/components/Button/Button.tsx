import styles from "./Button.module.css";
import AddIcon from "../../assets/add.svg?react";

type Props = {
   onClick: () => void;
};

const Button = ({ onClick }: Props) => {
   return (
      <div className={styles.container}>
         <button onClick={onClick}>
            Criar <AddIcon />
         </button>
      </div>
   );
};

export default Button;
