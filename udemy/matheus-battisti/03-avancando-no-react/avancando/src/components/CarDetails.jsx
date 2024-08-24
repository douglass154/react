const CarDetails = ({ brand, km, color, newCar }) => {
   return (
      <div>
         <h2>Detalhes do Carro:</h2>
         <ul style={{ listStyle: 'none' }}>
            <li>Marca: {brand}</li>
            <li>Km: {km}Km</li>
            <li>Cor: {color}</li>
         </ul>
         {newCar && <p>Este carro é novo!</p>}
      </div>
   );
};

export default CarDetails;
