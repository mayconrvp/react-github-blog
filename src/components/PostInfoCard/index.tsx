import { formatDistanceToNow, parseISO } from 'date-fns';
// import ptBR from "date-fns/locale/pt-BR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BoxContainer, BoxTopContainer, ContainerFlexCol, MoreInfoContainer, ProfileCard, Title } from "./styles";
import { faArrowLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface PostInfoCardProps {
  // title: string;
  // created_at: string;
  // comments: number;  
  // login: string;
  // html_url: string;
  numberId: number | string;
}
// comments, created_at, title, login, html_url
export function PostInfoCard({numberId}: PostInfoCardProps) {

  const [issue, setIssue] = useState({
    id: '',
    title: '',
    body: '',
    comments: 0,
    created_at: '',
    html_url: '',
    user: {
      login: ''
    }
  })
  
  console.log("ID "+numberId)
  useEffect(() => {
    api
      .get("repos/mayconrvp/react-github-blog/issues/"+numberId)
      .then((response) => {
        setIssue(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.error("Ocorreu um erro - " + err)
      })
  }, []);
  

  console.log('title', issue.title)
  const publishedDateRelativeToNow = formatDistanceToNow(parseISO(issue.created_at.trim()), {
    // locale: ptBR,
    // addSuffix: true
  })
  return (
    // <ProfileCard >
    //   <BoxContainer>
        
    //     <BoxTopContainer className="top">
    //       <div className="links">
    //       <Link to="/">
    //         <FontAwesomeIcon icon={faArrowLeft} />
    //         <span>VOLTAR</span>
    //       </Link>
    //       <a href={issue.html_url} target="_blank">VER NO GITHUB 
    //         <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    //       </a>
    //       </div>
          
    //     </BoxTopContainer>
    //     <ContainerFlexCol>

    //       <Title>{issue.title}</Title>
    //       <MoreInfoContainer>
    //         <div>
    //           {/* <FontAwesomeIcon icon={faBuilding} /> */}
    //           <i className="fa-brands fa-github"></i>
    //           <span>{issue.user.login}</span>
    //         </div>
    //         <div>
    //           <FontAwesomeIcon className="icon" icon={faCalendarDay} /> 
    //           <span>{publishedDateRelativeToNow}</span>
    //         </div>
    //         <div>
    //           <FontAwesomeIcon className="icon" icon={faComment} />
    //           <span>{issue.comments}</span> 
    //         </div>
    //       </MoreInfoContainer>
    //     </ContainerFlexCol>
    //   </BoxContainer>
    // </ProfileCard>
  )
}