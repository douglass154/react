import style from './Search.module.css';

import { Link } from 'react-router-dom';

// Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';

// Components
import PostDetail from '../../components/PostDetail';

const Search = () => {
   const query = useQuery();
   const search = query.get('q');

   const { documents: posts } = useFetchDocuments('posts', search);

   return (
      <div className={style.search_container}>
         <h1>Resultados da pesquisa</h1>
         <div>
            {posts && posts.length === 0 && (
               <div className={style.no_posts}>
                  <p>Nenhuma publicação encontrada a partir da sua busca :/</p>
                  <Link to="/" className="btn btn-dark">
                     Voltar
                  </Link>
               </div>
            )}
            {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
         </div>
      </div>
   );
};

export default Search;
