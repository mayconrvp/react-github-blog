import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarImg, BoxContainer, BoxTopContainer, MoreInfoContainer, ProfileCard } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";

interface ProfileProps {
  username: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
}

export function Profile({username, bio, company, followers, login}: ProfileProps) {
  return (
    <ProfileCard >
      <AvatarImg src={"https://github.com/"+login+".png"} />
      <BoxContainer>
        <BoxTopContainer className="top">
          <span>{username}</span>
          <a href={'https://github.com/'+login} target="_blank">GITHUB 
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </BoxTopContainer>
        <p>{bio}</p>
        <MoreInfoContainer>
          <div>
            {/* <FontAwesomeIcon icon={faBuilding} /> */}
            <i className="fa-brands fa-github"></i>
            <span>{login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} /> 
            <span>{company ?? 'Personal Cpny'}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} />
            <span>{followers} seguidores</span> 
          </div>
        </MoreInfoContainer>
      </BoxContainer>
    </ProfileCard>
  )
}