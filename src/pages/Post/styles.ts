import { ProfileCard } from './../../components/Profile/styles';
import { styled } from "styled-components";

export const PostCard = styled(ProfileCard)`
  height: 10.5rem;
  min-height: 10.5rem;
  margin-top: -5rem;
  justify-content: center;
  background-color: red;
`

export const PostContainer = styled.div`

`

export const TextContainer = styled.div`
padding: 7.5rem 2rem 2.5rem 2rem;
width: 54rem;
margin: 0 auto;
p {
  color: ${props => props.theme['base-text']};
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
}
`
//////////////////////////////////////////////////////////////////////