import style from './ShowCars.module.css';

const ShowCars = ({ brand, km, newCar }) => {
   return (
      <div className={style.cars_container}>
         <h2 className={style.cars_title}>Carro da {brand}</h2>
         <p className={style.cars_paragraph}>KM's rodados: {km}km</p>
         <p className={style.cars_paragraph}>
            Situação: {newCar ? 'Carro novo' : 'Carro Usado'}
         </p>
      </div>
   );
};

export default ShowCars;
