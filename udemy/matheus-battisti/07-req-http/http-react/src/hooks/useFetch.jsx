import { useState, useEffect } from 'react';

// 4 - Custom hook
export const useFetch = url => {
   const [data, setData] = useState(null);

   // 5 - Refatorando POST
   const [config, setConfig] = useState(null);
   const [method, setMethod] = useState(null);
   const [callFetch, setCallFetch] = useState(false);

   // 6 - Loading
   const [loading, setLoading] = useState(false);

   // 7 - Tratando erros
   const [error, setError] = useState(null);

   // 8 - Desafio 06
   const [itemId, setItemId] = useState(null);

   
   const httpConfig = (data, method) => {
      if (method === 'POST') {
         setConfig({
            method,
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         });

         setMethod(method)
      }

      if (method === 'DELETE') {
         setConfig({
            method,
            headers: {
               'Content-Type': 'application/json',
            }
         })

         setMethod(method);
         setItemId(data);
      }
   };

   useEffect(() => {
      /* Requisição para a obtenção da lista de produtos atual*/
      const fetchData = async () => {
         // 6 - loading
         setLoading(true);

         try {
            const res = await fetch(url);
            const data = await res.json();
   
            setData(data);
         } catch(error) {
            console.log(error.message);
            setError('Houve algum erro ao carregar os dados');
         }

         setLoading(false);
      };

      fetchData();
   }, [url, callFetch]);

   // 5 - Refatorando POST
   useEffect(() => {
      const httpRequest = async () => {
         if (method === 'POST') {
            let fetchOptions = [url, config];
            const res = await fetch(...fetchOptions);
            
            const data = res.json();

            setCallFetch(data);
         }

         if (method === 'DELETE') {
            let fetchOptions = [url, config];
            fetchOptions[0] = fetchOptions[0] + itemId;
            const res = await fetch(...fetchOptions);

            const data = res.json();

            setCallFetch(data);
         }
      };

      httpRequest();
   }, [config, method, url]);

   return { data, httpConfig, loading, error };
};
