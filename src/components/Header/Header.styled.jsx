import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  max-width: 480px;
  padding-inline: 70px;
  background-color: #881616;
  margin: 0 auto;
`;

export const HeaderImg = styled.img`
  display: block;
  width: 100%;
`;

export const HeaderHeading = styled.h1`
  position: absolute;
  bottom: 10px;
  left: 50%;

  width: 250px;
  transform: translateX(-50%);
  text-align: center;

  color: white;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-style: italic;
`;
