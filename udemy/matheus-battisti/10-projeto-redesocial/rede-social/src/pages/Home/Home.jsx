import styles from './Home.module.css';

// Hooks
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// Components
import PostDetail from '../../components/PostDetail';

const Home = () => {
   const [query, setQuery] = useState('');
   const { documents: posts, loading } = useFetchDocuments('posts');

   const navigate = useNavigate();

   const handeSubmit = e => {
      e.preventDefault();

      if(query) {
         return navigate(`/search?q=${query}`);
      }
   };

   return (
      <div className={styles.home}>
         <h1>Veja as publicações mais recentes</h1>
         <form onClick={handeSubmit} className={styles.search_form}>
            <input
               type="text"
               placeholder="Ou busque por tags..."
               onChange={e => setQuery(e.target.value)}
            />
            <button className="btn btn-dark">Pesquisar</button>
         </form>
         <div className={styles.noposts_container}>
            {loading && <p>Carregando...</p>}
            {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
            {posts && posts.length === 0 && (
               <div className={styles.noposts}>
                  <p>Nenhuma publicação encontrada.</p>
                  <Link to="/posts/create" className="btn">
                     Criar primeira publicação
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
};

export default Home;
