import styled from 'styled-components';

interface ContainerProps {
  selected: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 6px;
  }
`;

interface ContextProps {
  selected: boolean
}

export const Content = styled.button<ContextProps>`
  height: 40px;
  width: 100%; 

  background: ${props => props.theme.colors.mintCream[300]};
  color: gray;

  border: none;
  border-radius: 7.5px;
  background: ${props => props.theme.colors.mintCream[300]};
  box-shadow: rgba(0, 0, 0, 0.10) 0px 10px 10px 0px;

  ${({ selected }) => selected && `
    background: #5C9970;
    color: #FDFFFD;
  `}

  padding: 0 15px;
  display: flex;
  align-items: center;

  div:nth-child(1){
    margin-right: 20px;
  }
  
  div:nth-child(2){
    margin-left: auto;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
`
