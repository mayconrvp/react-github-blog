import { styled } from "styled-components";

export const CardsOfPublications = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme['base-span']};
  }
`

export const PublicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 54rem;
  max-width: 1140px;
  margin: 0 auto;
`;

export const SearchFormContainer = styled.form`
`

export const PublicationsSearch = styled.input`
  display: flex;
  width: 54rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid var(--base-border, #1C2F41);
  background: var(--base-input, #040F1A);
  margin-top: 0.75rem;
  margin-bottom: 3rem;
  color: ${props => props.theme['white']};
`
export const ContentContainer = styled.div `
  background-color: ${props => props.theme['base-background']};
  width: 100vw;
  min-height: calc(100vh - 18.5rem);
  margin: 0 auto;
`
