
/* CSS Modules
   import styles from "./Card.module.css";
*/

import { Container, Title } from "./styles";

const Card = () => {
   return (
      <>
         {/* CSS Modules
            <div className={styles.container}>
               <h3>Card</h3>
            </div> 
         */}

         {/* Styled Components */}
         <Container>
            <Title $color="red">Meu título do Card</Title>
         </Container>

      </>
   );
};

export default Card;
