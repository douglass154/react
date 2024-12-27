import { useCallback, useState } from 'react';

import List from './List';

const HookUseCallback = () => {
   const [counter, setCounter] = useState(0);

   const getItemsFromDB = useCallback(() => {
      return ['a', 'b', 'c'];
   }, []);

   return (
      <div>
         <h2>UseCallback</h2>
         <List getItems={getItemsFromDB} />
         <button onClick={() => setCounter(counter + 1)}>Alterar</button>
         <p>Contador: {counter}</p>

         <hr />
      </div>
   );
};

export default HookUseCallback;
