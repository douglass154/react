import { useLayoutEffect, useState, useEffect } from 'react';

const HookUseLayoutEffect = () => {
   const [name, setName] = useState('nome padrao');

   useEffect(() => {
      console.log('2');
      setName('nome useEffect');
   }, []);

   useLayoutEffect(() => {
      console.log('1');
      setName('nome useLayoutEffect');
   }, []);

   console.log(name);

   return(
      <div>
         <h2>UseLayoutEffect</h2>
         <p>Nome: {name}</p>

         <hr />
      </div>
   );
};

export default HookUseLayoutEffect;
