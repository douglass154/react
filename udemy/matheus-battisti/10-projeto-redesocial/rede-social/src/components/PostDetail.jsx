import styles from './PostDetail.module.css';

import { Link } from 'react-router-dom';

const PostDetail = ({ post }) => {
   return (
      <div className={styles.post_detail}>
         <img src={post.image} alt={post.title} />
         <div className={styles.post_info}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className={styles.createdby}>Criado por: {post.createdBy}</p>
         </div>
         <div className={styles.tags}>
            {post.tagsArray.map(tag => (
               <p key={tag}>
                  <span>#</span>
                  {tag}
               </p>
            ))}
         </div>
         <Link to={`/posts/${post.id}`} className="btn btn-outline">
            Ver Publicação
         </Link>
      </div>
   );
};

export default PostDetail;
