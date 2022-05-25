import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export const Content = styled.div`
  max-width: 768px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  h3 {
    color: ${props => props.theme.colors.brunswickGreen[300]}
  }

  button {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 40px;
    width: 40px;

    color: ${props => props.theme.colors.mintCream[300]};

    border: none;
    border-radius: 7.5px ;
    background: ${props => props.theme.colors.mintCream[500]};

    svg {
      margin-right: 0.5px;

      font-size: 22px;
      color: ${props => props.theme.colors.brunswickGreen[300]};

    }
  }
`;

