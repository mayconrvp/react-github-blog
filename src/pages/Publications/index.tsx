import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { CardsOfPublications, ContentContainer, PublicationsContainer, PublicationsSearch, TopContainer } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";

export function Publications() {
  const [user, setUser] = useState({
    name: '',
    bio: '',
    followers: 0,
    company: '-',
    login: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("users/mayconrvp")
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.error("Ocorreu um erro" + err)
      })
  }, []);

  useEffect(() => {
    api
      .get("search/issues?q=+repo:mayconrvp/react-github-blog")
      .then((response) => {
        setIssues(response.data.items)
        console.log(response.data.items)
      })
      .catch((err) => {
        console.error("Ocorreu um erro - " + err)
      })
  }, []);

  return (
    <ContentContainer>
      <PublicationsContainer>
        <Profile 
          username={user.name} 
          bio={user.bio} 
          login={user.login} 
          followers={user.followers}
          company={user.company}
        />
        <TopContainer>
          <h4>
            Publicações
          </h4>
          <span>
            {issues.length} publicações
          </span>
        </TopContainer>
        <PublicationsSearch placeholder="Buscar conteúdo" type="text" name="" id="" />
        <CardsOfPublications className="cards">
          {
            issues.map(el => {
              return (
                <Link to={"/post/"+el.number} style={{ textDecoration: 'none' }} key={el.id} >
                  <Card 
                    title={el.title} 
                    body={el.body} 
                    created_at={new Date(el.created_at)} 
                  />
                </Link>
              )
            })
          }
        </CardsOfPublications>
      </PublicationsContainer>
    </ContentContainer>
  )
}