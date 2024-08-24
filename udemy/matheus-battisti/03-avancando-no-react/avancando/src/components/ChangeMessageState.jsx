
const ChangeMessageState = ({handleMessage}) => {
   const messages = ["Oi", "Olá", "Oi, Tudo bem?"];

   return (
      <div>
         {messages.map((message, index) => (
            <button onClick={() => handleMessage(message)}>
               {index + 1}
            </button>
         ))}
      </div>
  )
}

export default ChangeMessageState