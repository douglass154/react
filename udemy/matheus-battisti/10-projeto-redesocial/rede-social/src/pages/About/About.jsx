import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {
   return (
      <div className={styles.about}>
         <h2>
            Sobre a rede social <span>Postly</span>
         </h2>
         <p>
            Bem vindo(a) ao Postly!
            <span>
               Esse é um projeto pessoal que criei para explorar o
               desenvolvimento de uma rede social e aprimorar minhas
               habilidades.
            </span>
            <span>
               Feito com React no front-end e Firestore no back-end, o Postly é
               uma forma de colocar em prática o que estou aprendendo. Aqui,
               você pode compartilhar posts, ver o que outros estão publicando e
               explorar uma rede social simples, mas cheia de possibilidades.
            </span>
            Sinta-se à vontade para explorar!
         </p>
         <h4>
            Feito por:
            <a href="https://github.com/douglass154" target="_blank">
               Douglas Silva de Jesus Santos
            </a>
         </h4>
         <Link to="/posts/create" className="btn">
            Criar nova publicação
         </Link>
      </div>
   );
};

export default About;
