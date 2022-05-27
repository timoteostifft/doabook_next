import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px;

  display: flex;

  & + & {
    margin-top: -16px;
  }

  button:nth-child(2) {
    margin-left: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 35px;
    width: 35px;

    color: ${props => props.theme.colors.mintCream[300]};

    border: none;
    border-radius: 7.5px ;
    background: ${props => props.theme.colors.brunswickGreen[300]};

    svg {
      font-size: 18px;
    }
  }
`;

export const Content = styled.button`
  display: flex;
  align-items: center;

  padding: 0 10px;

  width: 235px;
  height: 35px;
  border: none;

  border-radius: 7.5px;

  background: ${props => props.theme.colors.mintCream[500]};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;

  h5 {
    margin-right: 15px;
    color: ${props => props.theme.colors.brunswickGreen[300]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
  }

  
`
