import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { CardsOfPublications, ContentContainer, PublicationsContainer, PublicationsSearch, SearchFormContainer, TopContainer } from "./styles";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Publications() {
  const [user, setUser] = useState({
    name: '',
    bio: '',
    followers: 0,
    company: '-',
    login: ''
  });

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchPublications(data: SearchFormInputs){
    fetchIssues(data.query)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [issues, setIssues] = useState<any[]>([]);

  async function fetchIssues(query?: string) {
    console.log("FETCH, QUERY", query)

    await api
      .get(`search/issues?q=${query? query : ''}+repo:mayconrvp/react-github-blog`)
      .then((response) => {
        setIssues(response.data.items)
        console.log(response.data.items)
      })
      .catch((err) => {
        console.error("Ocorreu um erro - " + err)
      })
  }

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
    fetchIssues()
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
        <SearchFormContainer onSubmit={handleSubmit(handleSearchPublications)}>
          <PublicationsSearch 
            placeholder="Buscar conteúdo" 
            type="text"             
            {...register('query')}
          />
        </SearchFormContainer>
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