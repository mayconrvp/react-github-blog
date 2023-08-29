import { BlurContainer, ContainerFlex, HeaderContainer, ListContainer, LogoContainer } from "./styles";
import Listleft from "../../assets/listleft.svg"
import Listright from "../../assets/listright.svg"
import Logo from "../../assets/Logo.svg"
import Blur from "../../assets/Blur.png"


export function Header(){
  return (
    <HeaderContainer >
      <ContainerFlex className="flex">
        <ListContainer><img src={Listleft} alt="" /></ListContainer>
        <LogoContainer><img src={Logo} alt="" /></LogoContainer>
        <ListContainer><img src={Listright} alt="" className="right"/></ListContainer>
      </ContainerFlex>
      <BlurContainer><img src={Blur} alt="" /></BlurContainer>

    </HeaderContainer>
  )
}