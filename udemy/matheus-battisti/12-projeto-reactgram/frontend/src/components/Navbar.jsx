import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";
import {
   BsFillPersonFill,
   BsFillCameraFill,
   BsSearch,
   BsHouseDoorFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
   const { auth } = useAuth();
   const { user } = useSelector(state => state.auth);

   const [query, setQuery] = useState("");
   const [searchField, setSearchField] = useState("");

   const navigate = useNavigate();

   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(logout());
      dispatch(reset());

      navigate("/login");
   };

   const handleSearch = e => {
      e.preventDefault();

      if (query) {
         setSearchField("");
         return navigate(`/search?q=${query}`);
      }
   };

   return (
      <nav id="nav">
         <Link to="/">ReactGram</Link>
         <form id="search-form" onSubmit={handleSearch}>
            <BsSearch />
            <input
               type="text"
               placeholder="Pesquisar"
               onChange={e => {
                  setQuery(e.target.value);
                  setSearchField(e.target.value);
               }}
               value={searchField}
            />
         </form>
         <ul id="nav-links">
            {auth ? (
               <>
                  <li>
                     <NavLink to="/">
                        <BsHouseDoorFill />
                     </NavLink>
                  </li>
                  {user && (
                     <li>
                        <NavLink to={`/users/${user._id}`}>
                           <BsFillCameraFill />
                        </NavLink>
                     </li>
                  )}
                  <li>
                     <NavLink to="/profile">
                        <BsFillPersonFill />
                     </NavLink>
                  </li>
                  <li>
                     <span onClick={handleLogout}>Sair</span>
                  </li>
               </>
            ) : (
               <>
                  <li>
                     <NavLink to="/login">Entrar</NavLink>
                  </li>
                  <li>
                     <NavLink to="/register">Registrar</NavLink>
                  </li>
               </>
            )}
         </ul>
      </nav>
   );
};

export default Navbar;
