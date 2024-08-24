import React, { useState } from 'react';

const ConditionalRender = () => {
   const [x] = useState(true);

   const [name, setName] = useState('Alberto');

   return (
      <div>
         <h1>Isso será exibido?</h1>
         {x && <p>Se x for true, sim!</p>}
         {!x && <p>Agora x é false</p>}
         <hr
            style={{
               height: '10px',
               backgroundColor: 'black',
               borderRadius: '10px',
               margin: '40px 0',
            }}
         />
         <h1>If ternário</h1>
         {name === 'João' ? (
            <div>
               <p>O nome é {name}</p>
            </div>
         ) : (
            <div>
               <p>Nome não encontrado</p>
            </div>
         )}
         <button onClick={() => setName('João')}>Clique aqui!</button>
      </div>
   );
};

export default ConditionalRender;
