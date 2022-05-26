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
    color: ${props => props.theme.colors.brunswickGreen[300]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    overflow: hidden;
  }

  nav {
    margin-left: auto;
    display: flex;

    button {
      margin-left: 10px;

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

        font-size: 28px;
        color: ${props => props.theme.colors.brunswickGreen[300]};
      }

      &:first-child {
        svg {
          color: ${props => props.theme.colors.brunswickGreen[300]}
        }
      }

      &:nth-child(2){
        svg {
          font-size: 34px;
        }  
      }
    }
  }
`;

