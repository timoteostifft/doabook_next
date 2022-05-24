import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;

  width: 100%;

  background: ${props => props.theme.colors.brunswickGreen[300]};
`

export const Content = styled.div`

  max-width: 1048px;
  padding: 1rem;

  h3 {
    font-weight: 400;
    color: ${props => props.theme.colors.mintCream[500]}
  }
`