import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    position: relative;

    width: 100vw;
    height: 100vh;
    
    background: ${props => props.theme.colors.mintCream[500]};
  }

  button {
    cursor:pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .react-modal-overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   
    display: flex;
    align-items: center;
    justify-content: center;
  }
`