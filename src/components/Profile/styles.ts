import { styled } from "styled-components";

export const ProfileCard = styled.div`
  width: 54rem;
  max-width: 1120px;
  height: 13.25rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-profile']};
  margin: -5rem auto 4.5rem;
  position: relative;
  border: 1px solid ${props => props.theme['base-border']};

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 0 3rem;
`


export const AvatarImg = styled.img`
  width: 9.25rem;
  width: 9.25rem;
  border-radius: 8px;
  background-color: red;
`;


export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 8.8125rem;
  width: 100%;
`;

export const BoxTopContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 800;
    font-size: 1.5rem;
  }
  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: ${props => props.theme['blue']};
    text-decoration: none;
  }
`;


export const MoreInfoContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 2rem;
  div {
    display: flex;
    gap: .5rem;
    align-items: center;
  }
  span {
    font-weight: 400;
    font-size: 1rem;
  }
  i {
    font-size: 18px;
  }
`;
