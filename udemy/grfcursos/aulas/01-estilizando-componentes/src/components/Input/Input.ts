// import { Keyframes } from "styled-components/dist/types";
import styled from "styled-components";


/* Animações com Styled Components
   const rotate = keyframes`
      from {
         transform: rotate(0deg);
      } to {
         transform: rotate(360deg);
      }
   `;
*/

export const Input = styled.input`
   padding: 10px 30px;
   outline: none;
   border: 1px solid transparent;
   transition: .5s;
   background-color: ${props => props.theme.primary};

   &:hover {
      border-color: blue;
   }
`;