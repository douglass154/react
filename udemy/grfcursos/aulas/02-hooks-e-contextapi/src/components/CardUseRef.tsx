import { useRef } from "react";

const CardUseRef = () => {
   const inputElement = useRef<HTMLInputElement | null>(null);

   const handleClick = () => inputElement.current?.focus();

   return (
      <div className="container">
         <h2>Card UseRef</h2>
         <input ref={inputElement} type="text" />
         <button onClick={handleClick}>Focar no Input</button>
      </div>
   );
};

export default CardUseRef;
