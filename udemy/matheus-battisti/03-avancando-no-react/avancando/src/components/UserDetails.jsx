
const UserDetails = ({name, age, profession}) => {
   
   return (
      <div>
         <hr />
         <h3>Dados:</h3>
         <p>Nome: {name}</p>
         <p>Idade: {age}</p>
         <p>Profissão: {profession}</p>
         {age >= 18
            ? <p>{name} pode tirar carteira de habilitação</p>
            : <p>{name} <strong>NÃO</strong> pode tirar carteira de habilitação</p>
         }
      </div>
   )
}

export default UserDetails