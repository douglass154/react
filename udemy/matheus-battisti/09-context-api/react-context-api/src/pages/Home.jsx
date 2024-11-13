// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';

import { useState } from 'react';
import ChangeCounter from '../components/ChangeCounter/ChangeCounter';

// 4 - refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext';

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
   const [cor, setCor] = useState()

   // const { counter } = useContext(CounterContext);
   const { counter } = useCounterContext();

   // 5 - context mais complexo
   const { color, dispatch } = useTitleColorContext();

   // 6 - alterando state complexo
   const setTitleColor = color => {
      dispatch({ type: color });
   };

   const handleClick = () => {
      if (!cor) return;
      setTitleColor(cor.toUpperCase());
   }

   return (
      <div>
         <h1 style={{ color: color }}>Home</h1>
         <p>Valor do contador: {counter}</p>
         {/* 3 - alterando o valor do contexto */}
         <ChangeCounter />
         {/* 6 - alterando contexto complexo */}
         <div>
            <input type="text" onChange={(e) => setCor(e.target.value)} />
            <button onClick={handleClick}>Mudar cor do título</button>
         </div>
      </div>
   );
};

export default Home;
