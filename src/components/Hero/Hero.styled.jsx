import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  max-width: 480px;
  background-color: black;
  padding-inline: 15px;
  padding-top: 5px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`;

export const HeroText = styled.p`
  position: absolute;
  top: 15px;

  width: 200px;
  text-align: center;

  font-size: 10px;
  font-weight: 800;
  filter: drop-shadow(0 0 1px white);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 400px;
  }
`;

export const HeroHeading = styled.h2`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  color: #881616;
  -webkit-text-stroke: 0.4px white;
  font-weight: 900;
  font-size: 30px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const HeroSubheading = styled.p`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  /* 
  width: 250px; */

  text-align: center;
  font-size: 12px;
  font-weight: 700;
  filter: drop-shadow(0 0 1px white);

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const HeroButton = styled.button`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;

  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  justify-content: center;
  overflow: visible;
  padding: 10px 20px;
  text-align: center;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: #fef6f6;
    color: #e87575;

    &:active {
      box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
        0 8px 12px 6px rgb(60 64 67 / 15%);
      outline: none;
    }
  }
`;
