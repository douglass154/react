import { useState } from 'react';
import './App.css';

import MyForm from '../components/MyForm';

function App() {
   return (
      <div className="App">
         <h1>Forms</h1>
         <MyForm
            user={{
               name: 'Josias',
               email: 'josias@gmail.com',
               bio: 'Sou advogado',
               role: 'admin',
            }}
         />
      </div>
   );
}

export default App;
