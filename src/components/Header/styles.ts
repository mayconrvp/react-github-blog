import { styled } from "styled-components";

export interface HeaderProps {
  img: string;
  logo: string;
}

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['base-profile']};
  width: 100vw;
  height: 18.5rem;
  margin: 0 auto;

`
export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18.5rem;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -6rem;
`

export const ListContainer = styled.div`
  width: 30rem;  
  img.right {
    float: right;
  }
`;

export const BlurContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -12.5rem;
  img {
    /* background-color: orange; */
    width: 60rem;
    /* width: 100%; */
  }
`