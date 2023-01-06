import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  max-width: 480px;
  background-color: black;
  padding-inline: 15px;
  padding-top: 5px;
`;

export const HeroText = styled.p`
  position: absolute;
  top: 15px;

  width: 180px;
  text-align: center;

  font-size: 10px;
  font-weight: 800;
`;

export const HeroHeading = styled.h2`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  width: 200px;

  color: #881616;
  -webkit-text-stroke: 0.4px white;
  font-weight: 900;
  font-size: 30px;
`;

export const HeroSubheading = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 250px;

  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;

export const HeroButton = styled.button`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
`;
