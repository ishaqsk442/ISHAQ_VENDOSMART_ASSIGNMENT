import styled from "styled-components";

export const MovieCardContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
