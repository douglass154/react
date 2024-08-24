import { useState } from 'react';
import './App.css';

import MyComponent from '../components/MyComponent';
import Title from '../components/Title';

function App() {
   const n = 15;
   const [name] = useState('Matheus');

   const redTitle = true;

   return (
      <div className="App">
         {/* Css Global */}
         <h1>React com CSS</h1>

         {/* CSS de Componente */}
         <MyComponent />
         <p>Este paragrafo é do App.jsx</p>

         {/* Inline CSS */}
         <p
            style={{
               color: 'blue',
               padding: '25px',
               borderTop: '5px solid red',
            }}
         >
            Este elemento foi estilizado de forma inline
         </p>

         {/* CSS Inline Dinâmico */}
         <h2 style={n < 10 ? { color: 'purple' } : { color: 'orange' }}>
            CSS Dinâmico
         </h2>
         <h2
            style={
               name === 'Matheus'
                  ? { color: 'purple', backgroundColor: '#000' }
                  : null
            }
         >
            Teste nome
         </h2>

         {/* Classe Dinâmica */}
         <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter classe dinâmica</h2>
      
         {/* CSS Modules */}
         <Title />
         <h2 className='my_title'>Testando</h2>
      </div>
   );
}

export default App;
