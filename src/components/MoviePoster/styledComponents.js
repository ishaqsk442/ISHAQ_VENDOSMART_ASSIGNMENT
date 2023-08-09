import styled from "styled-components";

export const MoviePosterCont = styled.div`
  // margin-top:20px;
  background-color: #181d1f;
  padding: 10px;
  display: flex;
  margin: 10px;
  flex-direction: column;

  @media screen and (min-width: 678px) {
    border-radius: 10px;
    flex-direction: row;
    background-color: #080a0a;
    width: 80%;
    :hover {
      background-color: #1b1c1c;
      border-radius: 10px;
      transition: 0.2s;
    }
  }
  justify-content: center;
  align-items: center;

  width: 300px;
  border-radius: 20px;
`;
export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  //   margin: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    border-radius: 10px;
    width: 30%;
  }
`;

export const Heading = styled.h1`
  color: white;
  align-self: center;
  font-size: 20px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    text-align: center;

    font-size: 30px;
    font-weight: 600;
    font-size: bold;
  }
`;

export const ReleaseRatingCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    order: 1;
    // align-items: flex-end;
  }
`;
export const ReleaseDate = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;
export const Overview = styled.p`
  color: white;
  font-size: 16px;
  padding-left: 3px;
  background-color: #0e1214;
  padding: 10px;
  align-self: flex-end;
  border-radius: 10px;
  text-align: center;
  align-self: center;
  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
  :hover {
    background-color: none;
  }
`;
