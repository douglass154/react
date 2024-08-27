import { useState, useEffect } from 'react';
import './App.css';

// 4 - Custom hook
import { useFetch } from '../hooks/useFetch';

const url = 'http://localhost:3000/pruducts/';

function App() {
   const [products, setProducts] = useState([]);

   // 4 - Custom hook;
   const { data: items, httpConfig, loading, error } = useFetch(url);

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');

   // 1 - Resgatando dados
   // useEffect(() => {
   //    async function fetchData() {
   //       const res = await fetch(url);

   //       const data = await res.json();
   //       setProducts(data);
   //    }

   //    fetchData();
   // }, []);

   // 2 - Adicição de Produtos
   const handleSubmit = async event => {
      event.preventDefault();

      const product = { name, price };

      // const res = await fetch(url, {
      //    method: 'POST',
      //    headers: {
      //       'Content-Type': 'application/json',
      //    },
      //    body: JSON.stringify(product),
      // });

      // // 3 - Carregamento Dinâmico
      // const addedProducts = await res.json();

      // setProducts(prevProducts => [...prevProducts, addedProducts]);

      // 5 - Refatorando POST
      httpConfig(product, 'POST');

      setName('');
      setPrice('');
   };

   // 8 - Desafio 06;
   const handleDelete = (id) => {
      httpConfig(id, 'DELETE');
   }

   return (
      <div className="App">
         <h1>Lista de Produtos</h1>
         {/* 6 - Loading */}
         {loading && <p>Carregando dados...</p>}
         {error && <p>{error}</p>}
         {!error && (
            <ul>
               {items &&
                  items.map(product => (
                     <li key={product.id}>
                        {product.name} - R$ {product.price}
                        <button onClick={() => handleDelete(product.id)}>
                           Deletar produto
                        </button>
                     </li>
                  ))}
            </ul>
         )}

         <hr />

         <div className="add-product">
            <form onSubmit={handleSubmit} autoComplete="off">
               <label>
                  Nome:
                  <input
                     type="text"
                     value={name}
                     name="name"
                     onChange={e => setName(e.target.value)}
                  />
               </label>

               <label>
                  Price:
                  <input
                     type="number"
                     value={price}
                     name="price"
                     onChange={e => setPrice(e.target.value)}
                  />
               </label>

               {/* 7 - state de loading no POST */}
               {loading && <input type="submit" disabled value="Aguarde" />}
               {!loading && <input type="submit" value="Criar Produto" />}
            </form>
         </div>
      </div>
   );
}

export default App;
