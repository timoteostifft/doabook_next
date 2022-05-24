import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 768px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  img {
    width: 305px;
    height: auto;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 305px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border: none;
      max-width: 320px;
      width: 100%;
      height: 32px;
      padding-left: 10px;
      border-radius: 7.5px;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;

    button {
      width: 140px;
      height: 54px;
      font-weight: 500;
      border: none;
      color: ${props => props.theme.colors.mintCream[500]};
      border-radius: 7.5px;

      &:nth-child(1){
        background: ${props => props.theme.colors.mango[500]}
      }

      &:nth-child(2){
        background: ${props => props.theme.colors.brunswickGreen[300]}
      }
    }
  }
`