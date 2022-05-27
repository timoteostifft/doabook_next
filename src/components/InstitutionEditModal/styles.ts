import styled from 'styled-components';

export const Container = styled.div`
  height: 480px;
  min-width: 340px;

  padding: 20px;

  border-radius: 7.5px;
  background: ${props => props.theme.colors.mintCream[500]};
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 20px 0px;
  border: 1px solid ${props => props.theme.colors.brunswickGreen[300]};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;

  h3 {
    color: ${props => props.theme.colors.brunswickGreen[300]};
    display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;

      overflow: hidden;
      margin-right: 20px;
  }

  button {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;
    min-width: 35px;

    border: none;
    border-radius: 7.5px ;
    background: ${props => props.theme.colors.englishVermilion[300]};

    svg {
      margin-right: 0.5px;

      font-size: 22px;
      color: ${props => props.theme.colors.mintCream[300]};
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;

  p {
    color: gray;

    & + p {
      margin-top: 20px;
    }
  }
`;
