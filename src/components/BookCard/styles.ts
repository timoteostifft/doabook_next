import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;

  height: 120px;
  max-width: 768px;

  border-radius: 7.5px;
  background: ${props => props.theme.colors.mintCream[500]};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;
  

  section {
    margin-left: 20px;
    h3 {
      color: ${props => props.theme.colors.brunswickGreen[300]}
    }

    p {
      color: gray;
      font-size: 12px;
    }
  }

  nav {
    height: 100%;
    width: 140px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    border-radius: 0 7.5px 7.5px 0;
    margin-left: auto;
    background: ${props => props.theme.colors.mintCream[700]};

    button {
      display: flex;
      align-items: center;

      height: 30px;
      width: 100px;

      color: ${props => props.theme.colors.mintCream[300]};

      border: none;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;
      border-radius: 7.5px ;
      background: ${props => props.theme.colors.capri[300]};

      &:last-child { 
        background: ${props => props.theme.colors.mango[400]}; 
      }

      svg {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;
