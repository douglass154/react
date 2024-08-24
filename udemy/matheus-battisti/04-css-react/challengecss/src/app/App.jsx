import { useState } from 'react';
import './App.css';

import ShowCars from '../components/ShowCars';

function App() {
   const [cars] = useState([
      { id: 1, brand: 'Audi', km: 54919, newCar: false },
      { id: 2, brand: 'Lamborghine', km: 0, newCar: true },
      { id: 3, brand: 'VW', km: 142864, newCar: false },
      { id: 4, brand: 'Honda', km: 0, newCar: true },
   ]);

   return (
      <div>
         <h1>Desafio 05</h1>
         {cars.map(car => (
            <ShowCars
               key={car.id}
               brand={car.brand}
               km={car.km}
               newCar={car.newCar}
            />
         ))}
      </div>
   );
}

export default App;
