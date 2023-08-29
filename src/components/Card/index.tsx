import { CardContainer, CardTopContainer, ContentCard, Title } from "./styles";
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface CardProps {
  title: string;
  body: string;
  created_at: Date;
}

export function Card({title, body, created_at} : CardProps) {

  const publishedDateRelativeToNow = formatDistanceToNow(created_at, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <div>
      <CardContainer >
        <CardTopContainer>
          <Title>{title}</Title>
          <span>{publishedDateRelativeToNow}</span>
        </CardTopContainer>
    
        <ContentCard>
          {body}
        </ContentCard>
      </CardContainer>
    </div>
  )
}