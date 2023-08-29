import { styled } from "styled-components";

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  background-color: ${props => props.theme['base-profile']};
  /* position: relative; */
  margin: 0 auto;
  /* border: 1px solid ${props => props.theme['base-border']}; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  padding: 2rem;
`

export const CardTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  align-items: center;

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }
`

export const ContentCard = styled.p`
  width: 22rem;
  height: 7rem;
  flex-shrink: 0;
  overflow: hidden;
  line-height: 180%;
  color: ${props => props.theme['base-text']};
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  

  /* margin: 0 auto;
  position: relative;
  margin-top: 1.25rem; */

`

export const Title = styled.p`
  width: 17.6875rem;
  height: 4rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  color: ${props => props.theme['base-title']};
  cursor: pointer;

`