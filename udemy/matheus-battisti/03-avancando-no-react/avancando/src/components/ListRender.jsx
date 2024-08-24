import { useState } from 'react';

const ListRender = () => {
   const [list] = useState(['Matheus', 'Pedro', 'Josias']);

   const [users, setUsers] = useState([
      { id: 1, name: 'Pedro', age: 25 },
      { id: 2, name: 'Francisco', age: 42 },
      { id: 3, name: 'Robson', age: 21 },
   ]);

   const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
      console.log(randomNumber);

      setUsers(prevUsers => {
         return prevUsers.filter(user => randomNumber !== user.id);
      });
   };

   return (
      <div>
         <ul>
            {list.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
         <ul>
            {users.map(list => (
               <li key={list.id}>
                  Nome: {list.name} - Idade: {list.age}
               </li>
            ))}
         </ul>
         <button onClick={deleteRandom}>Delete random user</button>
      </div>
   );
};

export default ListRender;
