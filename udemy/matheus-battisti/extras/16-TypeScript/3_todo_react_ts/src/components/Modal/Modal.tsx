
import styles from "./Modal.module.css";

type Props = {
   children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
   const closeModal = (): void => {
      const modal = document.querySelector("#modal");
      modal!.classList.add("hide");
   }

   return (
      <div id="modal" className="hide">
         <div className={styles.fade} onClick={closeModal}></div>
         <div className={styles.modal}>
            <div className={styles.edit_task}>
               <h2>Editar Tarefa</h2>
               <i className="bi bi-x-circle" onClick={closeModal}></i>
            </div>
            {children}
         </div>
      </div>
   );
};

export default Modal;
