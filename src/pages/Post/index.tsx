import "./index.css"
import { useEffect, useState } from "react";
// import { PostInfoCard } from "../../components/PostInfoCard";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ContentContainer } from "../Publications/styles";
import { PostContainer, TextContainer } from "./styles";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import { BoxContainer, BoxTopContainer, ContainerFlexCol, MoreInfoContainer, ProfileCard, Title } from "../../components/PostInfoCard/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export function Post() {
  const { id } = useParams();
  
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
  
  useEffect(() => {
    console.log("ID "+id)
    api
      .get("repos/mayconrvp/react-github-blog/issues/"+id)
      .then((response) => {
        setIssue(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.error("Ocorreu um erro - " + err)
      })
  }, []);
  
  const publishedDateRelativeToNow = formatDistanceToNow(convertStringInDate(issue.created_at), {
    locale: ptBR,
    addSuffix: true
  })

  function convertStringInDate(str: string){
    return str.length ? Date.parse(str) : new Date();
  }
  
  return (
// 33561420230801406542
    <ContentContainer>
      <PostContainer>
      <ProfileCard >
        <BoxContainer>
          
          <BoxTopContainer className="top">
            <div className="links">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>VOLTAR</span>
            </Link>
            <a href={issue.html_url} target="_blank">VER NO GITHUB 
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            </div>
            
          </BoxTopContainer>
          <ContainerFlexCol>

            <Title>{issue.title}</Title>
            <MoreInfoContainer>
              <div>
                {/* <FontAwesomeIcon icon={faBuilding} /> */}
                <i className="fa-brands fa-github"></i>
                <span>{issue.user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCalendarDay} /> 
                <span>{publishedDateRelativeToNow}</span>
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faComment} />
                <span>{issue.comments}</span> 
              </div>
            </MoreInfoContainer>
          </ContainerFlexCol>
        </BoxContainer>
      </ProfileCard>
        <TextContainer>
        <p>
          <ReactMarkdown 
          >
            {issue.body} 
          </ReactMarkdown>
        </p>
        </TextContainer>
      </PostContainer>
    </ContentContainer>
    
  )
}