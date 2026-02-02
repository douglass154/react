const CardPostRequest = () => {
   const handleGetPosts = async () => {
      const request = await fetch(
         "https://jsonplaceholder.typicode.com/posts",
         {
            method: "POST",
            body: JSON.stringify({
               title: "Meu novo Post",
               body: "Body muito legal",
               userId: 1,
            }),
            headers: {
               "Content-Type": "application/json",
            },
         }
      );

      const result = await request.json();

      console.log("O resultado foi: ", result);
   };

   return (
      <div className="container">
         <h2>Post Request</h2>
         <button onClick={handleGetPosts}>Fazer requisição</button>
      </div>
   );
};

export default CardPostRequest;
