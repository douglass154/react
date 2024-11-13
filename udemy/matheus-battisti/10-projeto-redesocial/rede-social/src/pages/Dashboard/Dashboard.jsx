import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom';

// Hooks
import { useAuthValue } from '../../context/authContext';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = () => {
   const { user } = useAuthValue();
   const uid = user.uid;

   // posts do usuário
   const { documents: posts, loading } = useFetchDocuments('posts', null, uid);
   const { deleteDocument } = useDeleteDocument('posts');

   if (loading) return <p>Carregando...</p>;

   return (
      <div className={styles.dashboard}>
         <h2>Dashboard</h2>
         <p>Gerencie as suas publicações</p>
         {posts && posts.length === 0 ? (
            <div className={styles.no_posts}>
               <p>Nenhuma publicação encontrada :/</p>
               <Link to="/posts/create" className="btn">
                  Criar primeira publicação
               </Link>
            </div>
         ) : (
            <>
               <div className={styles.post_header}>
                  <span>Titulo</span>
                  <span>Ações</span>
               </div>

               {posts &&
                  posts.map(post => (
                     <div key={post.id} className={styles.post_row}>
                        <p>{post.title}</p>
                        <div className={styles.buttons_dashboard}>
                           <Link
                              to={`/posts/${post.id}`}
                              className="btn btn-outline"
                           >
                              Ver
                           </Link>
                           <Link
                              to={`/posts/edit/${post.id}`}
                              className="btn btn-outline"
                           >
                              Editar
                           </Link>
                           <button
                              onClick={() => deleteDocument(post.id)}
                              className="btn btn-outline btn-danger"
                           >
                              Excluir
                           </button>
                        </div>
                     </div>
                  ))}
            </>
         )}
      </div>
   );
};

export default Dashboard;
