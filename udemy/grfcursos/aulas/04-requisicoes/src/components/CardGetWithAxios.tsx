import axios from "axios";

type Post = {
   id: number;
   userId: number;
   title: string;
   body: string;
};

const CardGetWithAxios = () => {
   const handleGetPosts = async () => {
      const posts = await axios.get<Post[]>(
         "https://jsonplaceholder.typicode.com/posts",
      );

      console.log(posts.data);
      alert("OLHE O CONSOLE!");
   };

   return (
      <div className="container">
         <h2>Get Request With Axios</h2>
         <button onClick={handleGetPosts}>Fazer requisição</button>
      </div>
   );
};

export default CardGetWithAxios;
