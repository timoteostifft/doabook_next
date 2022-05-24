import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0 20px;
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;

  width: 100%;
  max-width: 768px;
  height: 40px;

  div {
    display: flex;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 20px 0px;

    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border-radius: 7.5px;
    background: ${props => props.theme.colors.mintCream[500]};

    svg {
      font-size: 20px;
      color: ${props => props.theme.colors.brunswickGreen[300]};
    }

    input {
      margin-left: 10px;

      background: inherit;
      color: gray;
      border: none;

      width: 100%;

      font-family: 'switzer', sans-serif;
      font-size: 18px;

      &::placeholder {
        opacity: 0.85;
      }

      &:focus {
        outline: none;
      }
    }

    &:focus,
    &.active {
      outline: 1px solid ${props => props.theme.colors.brunswickGreen[300]};
    }
  }

  button {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 10px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 7.5px;

    min-width: 40px;
    height: 100%;

    background: ${props => props.theme.colors.brunswickGreen[300]};
    border: none;
    border-radius: 7.5px;

    svg {
      margin-right: 0.5px;

      font-size: 25px;
      color: ${props => props.theme.colors.mintCream[500]};

      transform: rotate(90deg);
    }
  }
`
