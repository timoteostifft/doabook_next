import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;

  height: 340px;
  max-width: 340px;

  padding: 20px;

  border-radius: 7.5px;
  background: ${props => props.theme.colors.mintCream[500]};
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 20px 0px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

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
  width: 100%;
  height: 250px;
  margin-top: 12px;

  form {
    .input {
      display: flex;
      margin-top: 20px;

      p {
        color: gray;
        font-size: 14px;
        margin-right: 10px;
      }

      input {
        box-shadow: rgba(0, 0, 0, 0.20) 0px 10px 20px 0px;
        border: none;
        max-width: 320px;
        width: 100%;
        font-size: 14px;
        height: 22px;
        padding: 0 12px;
        border-radius: 7.5px;
      }
    }
  }

  .content {
    flex-direction: column;
    margin-top: 10px;

    p {
        color: gray;
        font-size: 14px;
        margin-right: 10px;
      }

    section {
      box-shadow: rgba(0, 0, 0, 0.10) 0px 10px 10px 0px;
      margin-top: 5px;
      border-radius: 7.5px;
      display: flex;
      flex-direction: column;
      height: 105px;
      width: 100%;
      max-height: 110px;
      overflow: scroll;

      overflow-y: scroll;
      overflow-x: hidden;
    }
  }

    nav {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      width: 100%;

      button {
        border-radius: 7.5px;
        height: 30px;
        width: 130px;
        border: none;
        color: ${props => props.theme.colors.mintCream[300]};
        background: ${props => props.theme.colors.englishVermilion[300]};

        &:nth-child(2) {
          background: ${props => props.theme.colors.brunswickGreen[300]}
        }
      }
    }
`;
