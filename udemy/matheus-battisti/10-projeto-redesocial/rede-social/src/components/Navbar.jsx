import { NavLink, Link } from 'react-router-dom';

import { useState } from 'react';
import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext.jsx';

import styles from './Navbar.module.css';

const Navbar = () => {
   const { user } = useAuthValue();
   const { logout } = useAuthentication();

   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <nav className={styles.navbar}>
         <Link to="/" className={styles.brand}>
            <h2>
               <span>Postly</span>
            </h2>
         </Link>
         <div className={`${styles.nav_list} ${menuOpen ? styles.active : ''}`}>
            <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menu_burguer}></button>
            <ul className={styles.links_list}>
               <li>
                  <NavLink to="/" onClick={() => setMenuOpen(false)} className={styles.active}>
                     Home
                  </NavLink>
               </li>
               {!user && (
                  <>
                     <li>
                        <NavLink to="/login" onClick={() => setMenuOpen(false)} className={styles.active}>
                           Entrar
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/register" onClick={() => setMenuOpen(false)} className={styles.active}>
                           Registrar
                        </NavLink>
                     </li>
                  </>
               )}
               {user && (
                  <>
                     <li>
                        <NavLink to="/posts/create" onClick={() => setMenuOpen(false)} className={styles.active}>
                           Nova publicação
                        </NavLink>
                     </li>
                     <li>
                        <NavLink to="/dashboard" onClick={() => setMenuOpen(false)} className={styles.active}>
                           Dashboard
                        </NavLink>
                     </li>
                  </>
               )}
               <li>
                  <NavLink to="/about" onClick={() => setMenuOpen(false)} className={styles.active}>
                     Sobre
                  </NavLink>
               </li>
               {user && (
                  <li>
                     <button onClick={logout} style={menuOpen ? {fontWeight: 'bold', fontSize: '1.4em'} : null}>
                        Sair
                     </button>
                  </li>
               )}
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
