import './Auth.css';

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/Message';

// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { login, reset } from '../../slices/authSlice';

const Auth = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const dispatch = useDispatch();
   const { loading, error } = useSelector(state => state.auth);

   const handleSubmit = e => {
      e.preventDefault();

      const user = {
         email,
         password,
      };

      dispatch(login(user))
   };

   // Clean all auth states
   useEffect(() => {
      dispatch(reset())
   }, [dispatch])

   return (
      <div id="login">
         <h2>ReactGram</h2>
         <p className="subtitle">
            Faça login para ver as mais novas publicações.
         </p>
         <form onSubmit={handleSubmit}>
            <input
               type="email"
               placeholder="E-mail"
               onChange={e => setEmail(e.target.value)}
               value={email}
            />
            <input
               type="password"
               placeholder="Senha"
               onChange={e => setPassword(e.target.value)}
               value={password}
            />
            {!loading && <input type="submit" value="Entrar" />}
            {loading && <input type="submit" value="Aguarde..." disabled />}
            {error && <Message msg={error} type={"error"} />}
         </form>
         <p>
            Não tem uma conta ainda? <Link to="/register">Registre-se</Link>
         </p>
      </div>
   );
};

export default Auth;
