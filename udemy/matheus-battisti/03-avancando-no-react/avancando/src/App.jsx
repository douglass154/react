import './App.css';

import City from './assets/city.jpg';
import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
   const carName = 'Audi';
   const userName = useState('João Vitor');

   const cars = [
      { id: 1, brand: 'Ferrari', km: 0, color: 'Vermelho', newCar: true },
      { id: 2, brand: 'KIA', km: 56728, color: 'Amarelo', newCar: false },
      { id: 3, brand: 'Koenigsegg', km: 28091, color: 'Branco', newCar: false },
   ];

   function showMessage() {
      console.log('evento do componente pai');
   }

   const [message, setMessage] = useState('');

   const handleMessage = msg => setMessage(msg);

   const users = [
      { id: 1, name: 'Douglas', age: 19, profession: 'programador' },
      { id: 2, name: 'Augusto', age: 21, profession: 'Editor de vídeo' },
      { id: 3, name: 'Lorenzo', age: 17, profession: 'Lojista' },
   ];

   return (
      <>
         <h1>Avançando no React</h1>
         {/* imagem em public */}
         <div>
            <img src="./img1.jpg" alt="Paisagem" />
         </div>

         {/* Imagem em assets */}
         <div>
            <img src={City} alt="Cidade" />
         </div>

         <ManageData />
         <ListRender />
         <ConditionalRender />
         {/* PROPS */}
         <hr />
         <ShowUserName user={userName} />
         <ShowUserName user="Douglas" />

         {/* DESTRUCTURING PROPS */}
         <hr />
         <CarDetails
            brand={carName}
            km={100000}
            color="Branco"
            newCar={false}
         />

         {/* Reaproveitando Props */}
         <hr />
         <CarDetails brand="Ford" km={0} color="Cinza" newCar={false} />
         <CarDetails
            brand="Lamborghini"
            km={0}
            color="Vermelho"
            newCar={true}
         />

         {/* Loop em array de objetos */}
         <hr />
         {cars.map(car => (
            <CarDetails
               key={car.id}
               brand={car.brand}
               km={car.km}
               color={car.color}
               newCar={car.newCar}
            />
         ))}

         {/* Fragments */}
         <Fragment />

         {/* Children */}
         <Container>
            <p>E este é o conteúdo</p>
         </Container>

         {/* Executar Função */}
         <ExecuteFunction myFunction={showMessage} />

         {/* State Lift */}
         <Message msg={message} />
         <ChangeMessageState handleMessage={handleMessage} />

         {/* Desafio */}
         {users.map((user) => (
            <UserDetails
               key={user.id}
               name={user.name}
               age={user.age}
               profession={user.profession}
            />
         ))}
      </>
   );
}

export default App;
