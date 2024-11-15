import styles from './Register.module.css';
import bglogin from '../../assets/bg-login.jpg';

import { useAuthentication } from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react';

const Register = () => {
   const [displayName, setDisplayName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [error, setError] = useState('');

   const { createUser, error: authError, loading } = useAuthentication();

   const handleSubmit = async event => {
      event.preventDefault();

      setError('');

      const user = {
         displayName,
         email,
         password,
      };

      if (password !== confirmPassword) {
         setError('As senhas precisam ser iguais!');
         return;
      }

      const res = await createUser(user);
      
      if(res) {
         setDisplayName('');
         setEmail('');
         setPassword('')
         setConfirmPassword('');
      }
   };

   useEffect(() => {
      if (authError) setError(authError);
   }, [authError]);

   return (
      <div className={styles.register_container}>
         <div className={styles.register}>
            <img src={bglogin} />
            <div>
               <h1>Cadastre-se</h1>
               <p>Crie seu usuário e compartilhe as suas histórias</p>
               <form onSubmit={handleSubmit}>
                  <label>
                     <span>Nome:</span>
                     <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={e => setDisplayName(e.target.value)}
                     />
                  </label>
                  <label>
                     <span>Email:</span>
                     <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail do usuário"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                     />
                  </label>
                  <label>
                     <span>Senha:</span>
                     <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha do usuário"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                     />
                  </label>
                  <label>
                     <span>Confirmar senha:</span>
                     <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                     />
                  </label>
                  {!loading && <button className="btn">Cadastrar</button>}
                  {loading && (
                     <button className="btn" disabled>
                        Aguarde...
                     </button>
                  )}
                  {error && <p className="error">{error}</p>}
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
