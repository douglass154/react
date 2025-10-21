/* Styled Components */
import type { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

// export const Container = styled.div`
//    background-color: white;
//    width: 400px;
//    height: 400px;
//    padding: 30px;
//    font-size: 1.4rem;
// `

// export const Title = styled.span<{ $color: string, $backgroundColor?: string }>`
//    font-size: 1.4rem;
//    font-weight: 800;
//    color: ${props => props.$color};
//    background-color: ${props => props.$backgroundColor};
// `



// Styled Components: Objetos de estilo
interface TitleProps {
   $color: string,
   $background?: string,
   children: ReactNode
}

export const Container = styled.div(() => ({
   backgroundColor: "white",
   width: 400,
   height: 400,
   padding: 30,
}))

export const Title: FunctionComponent<TitleProps> = styled.span(props => ({
   fontSize: "1.4rem",
   fontWeight: 800,
   color: props.$color,
   backgroundColor: props.$background
}))