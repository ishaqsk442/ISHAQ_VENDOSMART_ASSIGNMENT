// import react from "react";
import styled from "styled-components";

export const NavBg = styled.nav`
  position: fixed;
  top: 0;

  width: 100%;
`;

export const FormCont = styled.form`
  flex-wrap: wrap;
  background-color: #394047;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 0px;
`;
export const InputSearch = styled.input`
  background-color: black;
  padding-left: 20px;
  width: 400px;
  padding: 10px;
  color: white;
  outline: none;
  border: #406b65;
  border-style: solid;
  border-radius: 10px;
`;
export const SearchButton = styled.button`
  background-color: #6fc4e8;
  width: 100px;
  color: black;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const SelectFilersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;

  //   justify-content: space-between;
`;
export const RatingFilter = styled.select`
  background-color: #418082;
  border-radius: 10px;
`;

export const DateFilter = styled.select`
  background-color: #418082;
  border-radius: 10px;
`;
export const Options = styled.option`
  background-color: #52c3c7;
  border-radius: 10px;
  outline: none;
`;
export const PageNum = styled.p`
  color: #6f9da8;
  //   padding: 10px;
  border-radius: 10px;
`;
export const Span = styled.span`
  color: white;
`;
