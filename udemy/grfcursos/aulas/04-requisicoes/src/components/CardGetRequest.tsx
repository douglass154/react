import { useState } from "react";

type Post = {
   userId: number;
   id: number;
   title: string;
   body: string;
};

const CardGetRequest = () => {
   const [postsData, setPostsData] = useState<Post[]>([]);
   const [loading, setLoading] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

   const handleGetPosts = async () => {
      setLoading(true);

      try {
         const request = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );

         const posts: Post[] = await request.json();
         setPostsData(posts);
      } catch (error) {
         setErrorMessage("Houve um erro na requisição!");
      }

      setLoading(false);
   };

   return (
      <div className="container">
         <h2>Get Request</h2>
         <button onClick={handleGetPosts}>Fazer requisição</button>

         {loading && "Carregando..."}
         {errorMessage && postsData.length <= 0 && <p>{errorMessage}</p>}
         <ul>
            {postsData.map(item => (
               <li key={item.id}>{item.title};</li>
            ))}
         </ul>
      </div>
   );
};

export default CardGetRequest;
