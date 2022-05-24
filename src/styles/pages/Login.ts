import styled from "styled-components";

export const Wrapper = styled.main`
  position: absolute;
  z-index: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div:nth-child(1) {
    justify-content: space-around;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  div:nth-child(2) {
    input:nth-child(2) {
      margin-top: 16px;
      margin-bottom: 22px;
    }
  }

  
`