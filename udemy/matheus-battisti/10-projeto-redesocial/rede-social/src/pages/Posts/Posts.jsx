import styles from './Posts.module.css';

// Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Posts = () => {
   const { id } = useParams();
   const { document: post, loading } = useFetchDocument('posts', id);

   return (
      <div className={styles.viewPost}>
         {post && <h1>Publicação criada por: {post.createdBy}</h1>}
         <div className={styles.post_container}>
            <div className={styles.post}>
               {loading && <p>Carregando publicação...</p>}
               {post && (
                  <>
                     <img src={post.image} alt={post.title} />
                     <h1>{post.title}</h1>
                     <p>{post.body}</p>
                     <h3>Esta publicação trata sobre:</h3>
                     <div className={styles.tags}>
                        {post.tagsArray.map(tag => (
                           <p key={tag}>
                              <span>#</span>
                              {tag}
                           </p>
                        ))}
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default Posts;
