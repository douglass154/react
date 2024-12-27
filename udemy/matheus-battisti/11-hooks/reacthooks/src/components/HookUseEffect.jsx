import { useEffect, useState } from 'react';

const HookUseEffect = () => {
   // 1 - useEffect sem dependências
   useEffect(() => {
      console.log('estou sendo executado');
   });

   const [number, setNumber] = useState(1);

   const changeSomething = () => {
      setNumber(number + 1);
   };

   // 2 - useEffect com Array de dependências vazio
   useEffect(() => {
      console.log('Estou sendo executado apenas 1 vez');
   }, []);

   // 3 - useEffect com items no Array de dependências
   const [anotherNumber, setAnotherNumber] = useState(0);

   useEffect(() => {
      console.log('anotherNumber mudou, e eu fui executado');
   }, [anotherNumber]);

   // 4 - limpeza do useEffect
   useEffect(() => {
      // const timer = setTimeout(() => {
      //    console.log("Hello World!")

      //    setAnotherNumber(anotherNumber + 1);
      // }, 2 * 1000)

      // return () => clearTimeout(timer);
   }, [anotherNumber]);

   return (
      <div>
         <h2>UseEffect</h2>
         {/* 1 - useEffect sem dependências */}
         <p>Number: {number}</p>
         <button onClick={changeSomething}>Executar</button>

         {/* 3 - useEffect com items no Array de dependências */}
         <p>Another Number: {anotherNumber}</p>
         <button onClick={e => setAnotherNumber(anotherNumber + 1)}>
            Mudar anotherNumber
         </button>
         
         <hr />
      </div>
   );
};

export default HookUseEffect;
