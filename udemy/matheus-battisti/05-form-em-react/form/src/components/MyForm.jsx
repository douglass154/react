import { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
   // 6 - Controlled inputs

   // 3 - Gerenciamento de dados

   const [name, setName] = useState(user ? user.name : '');
   const [email, setEmail] = useState(user ? user.email : '');

   const [bio, setBio] = useState(user ? user.bio : '');

   const [role, setRole] = useState(user ? user.role : '');

   const handleName = event => {
      setName(event.target.value);
   };

   const handleSubmit = event => {
      event.preventDefault();
      console.log('Enviando o formulário');
      console.log(name, email, bio, role);

      // 7 - Limpar Formulários
      setName('');
      setEmail('');
      setBio('');
   };

   return (
      <div>
         {/* 5 - Envio de form */}
         {/* 1 - Criação de form */}
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="name">Nome</label>
               <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                  onChange={handleName}
                  value={name}
               />
            </div>

            {/* 2 - label envolvendo o input */}
            <label>
               <span>E-mail</span>

               {/* 4 - Simplificação de manipulação de state */}
               <input
                  type="email"
                  name="email"
                  placeholder="Digite o seu email"
                  onChange={event => setEmail(event.target.value)}
                  value={email}
               />
            </label>

            {/* 8 - Textarea */}
            <label>
               <span>Bio:</span>
               <textarea
                  name="bio"
                  placeholder="Descrição do usuário"
                  onChange={event => setBio(event.target.value)}
                  value={bio}
               ></textarea>
            </label>

            {/* 9 - select */}
            <label>
               <span>Função no sistema</span>
               <select
                  name="role"
                  onChange={event => setRole(event.target.value)}
                  value={role}
               >
                  <option value="user">Usuário</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
               </select>
            </label>

            <input type="submit" value="Enviar" />
         </form>
      </div>
   );
};

export default MyForm;
