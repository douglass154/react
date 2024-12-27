import { useState } from 'react';

const HookUseState = () => {
   // 1 - useState
   let username = 'João';

   const [name, setName] = useState('Douglas');

   const changeNames = () => {
      username = 'João Ribeiro';
      setName('Douglas Silva');
   };

   // 2 - useState e inputs
   const [age, setAge] = useState(18);

   const handleSubmit = (e) => {
      e.preventDefault();

      // envio a uma API
      console.log(age);
   }

   // 3 - useReducer

   return (
      <div>
         {/* 1 - useState */}
         <h2>useState</h2>
         <p>Variável: {username}</p>
         <p>useState: {name}</p>
         <button onClick={changeNames}>Mudar nomes</button>

         {/* 2 - useState e inputs */}
         <form onSubmit={handleSubmit} style={{marginTop: '30px'}}>
            <input
               type="text"
               value={age}
               onChange={e => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar" />
         </form>
         <p>Você tem {age} anos!</p>

         <hr />
      </div>
   );
};

export default HookUseState;
